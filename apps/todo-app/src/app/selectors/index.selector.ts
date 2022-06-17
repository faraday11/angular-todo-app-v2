import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodos from '../reducers/todos.reducer';
import * as fromLoading from '../reducers/loading.reducer';
import * as fromError from '../reducers/error.reducer';
import { Todo } from '../models/todo.model';
import { ErrorState, LoadingState, TodosState } from '../state/index.state';

export const getTodosState = createFeatureSelector<TodosState>('todos');

export const getLoadingState = createFeatureSelector<LoadingState>('loading');

export const getErrorState = createFeatureSelector<ErrorState>('error');

export const getAllTodos = createSelector(getTodosState, fromTodos.getAllTodos);

export const getVisibleTodos = (filter: string) =>
  createSelector(getAllTodos, (allTodos: Todo[]) => {
    switch (filter) {
      case 'all':
        return allTodos;
      case 'active':
        return allTodos.filter((t) => !t.completed);
      case 'completed':
        return allTodos.filter((t) => t.completed);
      default:
        throw new Error(`Unknown filter: ${filter}.`);
    }
  });

export const getIsLoading = (actionTypes: string[]) =>
  createSelector(getLoadingState, fromLoading.getIsLoading(actionTypes));

export const getError = (actionTypes: string[]) =>
  createSelector(getErrorState, fromError.getError(actionTypes));
