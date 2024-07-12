import { Component, Signal } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-no-two',
  templateUrl: './no-two.component.html',
  styleUrl: './no-two.component.scss',
})
export class NoTwoComponent {
  count: Signal<number>;

  constructor(private cs: CounterService) {
    this.count = cs.counter;
  }

  increment() {
    this.cs.incrementCounter();
  }
}
