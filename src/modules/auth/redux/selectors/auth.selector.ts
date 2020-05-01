import {AplicationState} from '~/modules';

export const authLoadingSelector = (state: AplicationState) =>
  state.auth.loading;
