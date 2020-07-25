import {createActions, createReducer} from 'reduxsauce';
import Immutable from 'seamless-immutable';

import {
  SessionActionTypes,
  SessionCreatorsTypes,
  SessionState,
  SessionReducerTypes,
} from '../types';

const {Types, Creators} = createActions<
  SessionActionTypes,
  SessionCreatorsTypes
>(
  {
    setUser: ['user'],
    setTokens: ['token', 'refreshToken'],
    reset: null,
  },
  {prefix: 'session/'},
);

const INITIAL_STATE: SessionState = Immutable({
  refreshToken: null,
  token: null,
  user: null,
});

export default createReducer<SessionState, SessionReducerTypes>(INITIAL_STATE, {
  [Types.SET_USER]: (state, action) => state.merge({user: action.user}),

  [Types.SET_TOKENS]: (state, action) =>
    state.merge({token: action.token, refreshToken: action.refreshToken}),

  [Types.RESET]: (state) =>
    state.merge({refreshToken: null, token: null, user: null}),
});

export const SessionActions = Creators;
export const SessionTypes = Types;
