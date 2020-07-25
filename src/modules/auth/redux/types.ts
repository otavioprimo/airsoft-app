import {ImmutableObject} from 'seamless-immutable';
import {Action} from 'redux';
import {IUser} from '~/interfaces/User';

export interface AuthData {}

export interface LoginParam {
  email: string;
  password: string;
}

interface AuthSuccess {
  message: string;
  data: LoginParam;
}

export interface SingupMetadata {
  loading: boolean;
  error: string | null;
}

interface State {
  success: AuthSuccess | null;
  loading: boolean;
  error: string | null;
  signup: {
    loading: boolean;
    success: SignUpSuccessPayload | null;
    error: string | null;
  };
}

export interface AuthState extends ImmutableObject<State> {}

export interface AuthActionTypes {
  INIT_APP: string;
  APP_START: string;
  LOGOUT: string;

  LOGIN: string;
  LOGIN_SUCCESS: string;
  LOGIN_FAILURE: string;

  SIGNUP: string;
  SIGNUP_SUCCESS: string;
  SIGNUP_FAILURE: string;
}

export interface LoginSuccessPayloadType {
  message: string;
  data: any;
}

export interface SignUpSuccessPayload {
  message: string;
  token: string;
  refreshToken: string;
  data: IUser;
}

export interface InitApp extends Action<AuthActionTypes> {}

export interface Logout extends Action<AuthActionTypes> {}

export interface AppStart extends Action<AuthActionTypes> {
  appRoot: string | null;
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

export interface Signup extends Action<AuthActionTypes> {
  name: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface SignupSuccess extends Action<AuthActionTypes> {
  successPayload: SignUpSuccessPayload;
}

export interface SignupFailure extends Action<AuthActionTypes> {
  error: string;
}

type AppRoot = 'inside' | 'outside';

export interface CreatorsTypes {
  initApp(): InitApp;
  appStart(appRoot: AppRoot | null): AppStart;
  logout(): Logout;

  login(email: string, password: string): Login;
  loginSuccess(payload: LoginSuccessPayloadType): LoginSuccess;
  loginFailure(error: any): LoginFailure;

  signup(
    name: string,
    email: string,
    username: string,
    password: string,
    confirmPassword: string,
  ): Signup;
  signupSuccess(successPayload: SignUpSuccessPayload): SignupSuccess;
  SignupFailure(error: string): SignupFailure;
}

export type ReducerTypes = Login &
  LoginSuccess &
  LoginFailure &
  Signup &
  SignupFailure &
  SignupSuccess &
  InitApp &
  Logout;
