import {ImmutableObject} from 'seamless-immutable';
import {Action} from 'redux';

export interface AuthData {}

export interface LoginParam {
  email: string;
  password: string;
}

interface AuthSuccess {
  message: string;
  data: LoginParam;
}

interface State {
  success: AuthSuccess | null;
  loading: boolean;
  error: string | null;
}

export interface AuthState extends ImmutableObject<State> {}

export interface AuthActionTypes {
  LOGIN: string;
  LOGIN_SUCCESS: string;
  LOGIN_FAILURE: string;
}

export interface LoginSuccessPayloadType {
  message: string;
  data: any;
}

export interface Login extends Action<AuthActionTypes> {
  email: string;
  password: string;
}

export interface LoginSuccess extends Action<AuthActionTypes> {
  payload: LoginSuccessPayloadType;
}

export interface LoginFailure extends Action<AuthActionTypes> {
  error: any;
}

export interface CreatorsTypes {
  login(email: string, password: string): Login;
  loginSuccess(payload: LoginSuccessPayloadType): LoginSuccess;
  loginFailure(error: any): LoginFailure;
}

export type ReducerTypes = Login & LoginSuccess & LoginFailure;
