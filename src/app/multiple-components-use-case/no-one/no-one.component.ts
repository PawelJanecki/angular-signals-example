import { Component, Signal } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-no-one',
  templateUrl: './no-one.component.html',
  styleUrl: './no-one.component.scss',
})
export class NoOneComponent {
  count: Signal<number>;

  constructor(private cs: CounterService) {
    this.count = cs.counter;
  }

  increment() {
    this.cs.incrementCounter();
  }
}
