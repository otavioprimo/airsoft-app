import {AplicationState} from '~/modules';

export const authLoadingSelector = (state: AplicationState) =>
  state.auth.loading;

export const authErrorSelector = (state: AplicationState) => state.auth.error;
