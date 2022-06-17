import { ActionReducerMap } from '@ngrx/store';
import * as fromError from './error.reducer';
import * as fromLoading from './loading.reducer';
import * as fromTodos from './todos.reducer';
import { State } from '../state/index.state';

export const reducers: ActionReducerMap<State> = {
  todos: fromTodos.todos,
  loading: fromLoading.loading,
  error: fromError.error,
};
