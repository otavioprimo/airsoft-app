import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

import {
  AuthActionTypes,
  CreatorsTypes,
  AuthState,
  ReducerTypes,
} from '../types';

const {Types, Creators} = createActions<AuthActionTypes, CreatorsTypes>(
  {
    login: ['email', 'password'],
    loginSuccess: ['payload'],
    loginFailure: ['error'],
  },
  {
    prefix: 'auth/',
  },
);

const INITIAL_STATE: AuthState = Immutable({
  success: null,
  loading: false,
  error: null,
});

export default createReducer<AuthState, ReducerTypes>(INITIAL_STATE, {
  [Types.LOGIN]: (state) =>
    state.merge({loading: true, success: null, error: null}),

  [Types.LOGIN_SUCCESS]: (state, action) =>
    state.merge({
      error: null,
      loading: false,
      success: action.payload,
    }),

  [Types.LOGIN_FAILURE]: (state, action) =>
    state.merge({error: action.error, success: null, loading: false}),
});

export const AuthActions = Creators;
export const AuthTypes = Types;
