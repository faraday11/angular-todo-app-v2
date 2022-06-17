import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TodosActions from '../../actions/todos.actions';
import { State } from '../../state/index.state';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'todo-example-app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  new_todo = new FormControl('');

  constructor(private store: Store<State>) {}

  addTodo(): void {
    this.store.dispatch(
      TodosActions.addTodoRequest({
        text: this.new_todo.value,
        completed: false,
      })
    );
    this.new_todo.setValue('');
  }
}
