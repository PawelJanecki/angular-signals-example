import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  modelFromParent = signal('old value in parent');

  modelInputChanged(value: string | undefined) {
    console.log('new value from child: ', value);
    console.log('value of modelFromParent: ', this.modelFromParent());
  }

  valueChanged(value: string) {
    console.log('value emitted from child: ', value);
  }
}
