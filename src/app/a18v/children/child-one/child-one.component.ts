import { Component, effect, EffectRef, input, model, output } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrl: './child-one.component.scss'
})
export class ChildOneComponent {
  optionalInput = input<number>();
  optionalInputWithDefaultValue = input(5, {
    transform: (value: number) => value * 2
  });
  requiredInput = input.required<number>();

  modelInput = model<string>()

  valueChanged = output<string>();

  effectRef: EffectRef;

  constructor() {
    this.effectRef = effect(() => {
      console.log('CHANGES!!!');
      console.log('optionalInput: ', this.optionalInput());
      console.log('optionalInputWithDefaultValue: ', this.optionalInputWithDefaultValue());
      console.log('requiredInput: ', this.requiredInput());
      console.log('modelInput: ', this.modelInput());
      console.log('***\n')
    })
  }

  changeModelInput() {
    this.modelInput.set('new value is here!!!');
  }

  emitOutput() {
    this.valueChanged.emit('value emitted from child.')
  }
}
