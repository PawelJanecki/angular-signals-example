import { Component, computed, effect, EffectRef, signal, untracked } from '@angular/core';

@Component({
  selector: 'app-set-update-read',
  templateUrl: './set-update-read.component.html',
  styleUrl: './set-update-read.component.scss',
})
export class SetUpdateReadComponent {
  counter = signal(0);
  multiplier = 0;
  derivedCounter = computed(() => {
    // WRONG SOLUTION - not every path create dependency to counter signal!!
    // if (this.multiplier < 10) {
    //   return 0;
    // } else {
    //   return this.counter() * this.multiplier;
    // }

    // CORRECT
    console.log(`Computing derived counter...`);

    const counterValue = this.counter();

    if (this.multiplier < 10) {
      return 0;
    } else {
      return counterValue * this.multiplier;
    }
  });

  counter2 = signal(0);
  counter3 = signal(2);
  derivedCounter2 = computed(() => {
    return this.counter2() * 10 + untracked(this.counter3);
  });

  effectRef: EffectRef;

  constructor() {
    console.log(`counter value: ${this.counter()}`);
    this.effectRef = this.logCurrentValuesFromSingals();
  }

  set() {
    console.log(`Setting value to 0...`);

    this.counter.set(0);
  }

  increment() {
    console.log(`Updating counter...`);

    this.counter.update((counter) => counter + 1);
  }

  updateWithTheSameValue() {
    this.counter.update((counter) => counter);
    // derivedCounter won't be called because previous value of counter and new are the same.
    // Default equality check is '==='.
  }

  increment2() {
    console.log(`Updating counter2...`);
    this.counter2.update((counter) => counter + 1);
  }

  increment3() {
    console.log(`Updating counter3...`);
    this.counter3.update((counter) => counter + 1);
  }

  logCurrentValuesFromSingals() {
    return effect(
      (onCleanup) => {
        const counter = this.counter();
        const derivedCounter = this.derivedCounter();

        const counter2 = this.counter2();
        const counter3 = this.counter3();
        const derivedCounter2 = this.derivedCounter2();

        console.log(
          `current values: \n*counter: ${counter},\n*derivedCounter: ${derivedCounter},\n\n*counter2: ${counter2},\n*counter3: ${counter3},\n*derivedCounter2: ${derivedCounter2}`
        );

        if (counter === 10) {
          this.counter.set(1);
        }

        onCleanup(() => {
          console.log(`Perform cleanup action here...`)
        })
      },
      {
        allowSignalWrites: true,    // allowing to update signals value inside effects
        manualCleanup: true         // disabling default cleanup behavior
      }
    );
  }

  destroyEffect() {
    // destroying effect 
    this.effectRef.destroy();
  }
}
