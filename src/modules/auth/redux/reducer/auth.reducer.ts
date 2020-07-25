import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';
// import {markActionsOffline} from 'redux-offline-queue';

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

    signup: ['name', 'email', 'username', 'password', 'confirmPassword'],
    signupSuccess: ['successPayload'],
    SignupFailure: ['error'],
  },
  {
    prefix: 'auth/',
  },
);

// markActionsOffline(Creators, ['login']);

const INITIAL_STATE: AuthState = Immutable({
  success: null,
  loading: false,
  error: null,
  signup: {
    error: null,
    loading: false,
    success: null,
  },
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

  [Types.SIGNUP]: (state) =>
    state.merge(
      {signup: {loading: true, error: null, success: null}},
      {deep: true},
    ),

  [Types.SIGNUP_SUCCESS]: (state, action) =>
    state.merge(
      {signup: {loading: false, error: null, success: action.successPayload}},
      {deep: true},
    ),

  [Types.SIGNUP_FAILURE]: (state, action) =>
    state.merge(
      {signup: {loading: false, error: action.error, success: null}},
      {deep: true},
    ),
});

export const AuthActions = Creators;
export const AuthTypes = Types;
