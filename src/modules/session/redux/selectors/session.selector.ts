import {AplicationState} from '~/modules';

export const sessionUserSelector = (state: AplicationState) =>
  state.session.user;

export const sessionTokenSelector = (state: AplicationState) => ({
  token: state.session.token,
  refreshToken: state.session.refreshToken,
});
