import { Action } from '@ngrx/store';
import { LoadingState } from '../state/index.state';

export const loading = (
  state: { [actionType: string]: boolean } = {},
  action: Action
): { [actionType: string]: boolean } => {
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(action.type);

  if (!matches) return state;

  const [, requestName, requestState] = matches;
  return {
    ...state,
    [requestName]: requestState === 'REQUEST',
  };
};

export const getIsLoading = (actionTypes: string[]) => (state: LoadingState) =>
  actionTypes.some((actionType) => state[actionType]);
