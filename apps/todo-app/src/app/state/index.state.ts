import { Todo } from '../models/todo.model';

export interface ErrorState {
  [actionType: string]: boolean;
}

export interface LoadingState {
  [actionType: string]: boolean;
}

export interface TodosState {
  byId: { [id: string]: Todo };
  allIds: string[];
}

export interface State {
  todos: TodosState;
  loading: LoadingState;
  error: ErrorState;
}
