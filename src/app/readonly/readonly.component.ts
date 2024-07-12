import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-readonly',
  templateUrl: './readonly.component.html',
  styleUrl: './readonly.component.scss',
})
export class ReadonlyComponent {
  counter = signal(0).asReadonly();

  derivedCounter = computed(() => this.counter() * 10);

  constructor() {
    // this.counter.set(5);   // impossible, because counter is declared as readonly!

    // this.derivedCounter.set(50);    // impossible, because computed is always readonly!
  }
}
