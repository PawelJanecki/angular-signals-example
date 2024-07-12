import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-array-object',
  templateUrl: './array-object.component.html',
  styleUrl: './array-object.component.scss',
})
export class ArrayObjectComponent {
  list = signal(['Hello', 'World'], {
    equal: (a, b) => {
      console.log(a)
      console.log(b)
      return a.toString() === b.toString();
    }
  });
  listLength = computed(() => {
    return this.list().length;
  })

  object = signal(
    {
      id: 1,
      title: 'Angular example app',
    },
    // overriding default equality checker (===) to determine conditions when previous and new value are not equal.
    {
      equal: (a, b) => {
        return a.id === b.id && a.title == b.title;
      },
    }
  );
  title = computed(() => {
    console.log(`Calling computed() function...`);

    const course = this.object();

    return course.title;
  });

  updateObject() {
    // WRONG method because any connected signal won't be called (this is mutated, not updated or set)
    // this.object().title = 'overwriting title';

    // CORRECT
    this.object.set({
      id: 1,
      title: 'Angular example with updating objects.',
    });
  }

  addItemToList() {
    // WRONG solution - reason is the same as in method above.
    // this.list().push('!!!');

    // CORRECT
    this.list.update((list: string[]) => {
      let newList = [...list];
      newList.push('!!!');
      return newList;
    })
  }
}
