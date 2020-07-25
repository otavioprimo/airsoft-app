import {put, takeLatest, call, select, delay} from 'redux-saga/effects';
import {AuthActions, AuthTypes} from '../reducer/auth.reducer';

import * as RootNavigator from '~/utils/rootNavigation';

import {Login, Signup, AppStart} from '../types';
import Api from '~/modules/core/services/Api';

import SignUpResponse from '~/interfaces/ApiResponse/UserResponse/SignUpResponse';

import {sanitalizeApiError} from '~/modules/core/services/api.helper';
import {SessionActions} from '~/modules/session/redux/reducer/session.reducer';
import LoginResponse from '~/interfaces/ApiResponse/AuthResponse/LoginResponse';
import {sessionTokenSelector} from '~/modules/session/redux/selectors/session.selector';

export function* initApp() {
  yield delay(1);
  if (yield isLogged()) {
    return yield put(AuthActions.appStart('inside'));
  }

  return yield put(AuthActions.appStart('outside'));
}

function* isLogged() {
  const {token} = yield select(sessionTokenSelector);
  return !!token;
}

export function* appStart({appRoot}: AppStart) {
  switch (appRoot) {
    case 'inside':
      yield navigate('Home');
      break;
    default:
      yield navigate('Auth', {screen: 'Login'});
  }
}

function* navigate(route: string, params?: object) {
  yield RootNavigator.reset(route, params);
}

export function* doLogin(login: Login) {
  try {
    const response: LoginResponse = yield call(Api.login, login);

    yield put(SessionActions.setUser(response.data));
    yield put(SessionActions.setTokens(response.token, response.refreshToken));
    yield put(AuthActions.loginSuccess(response));
    RootNavigator.navigate('Home');
  } catch (error) {
    yield put(AuthActions.loginFailure(sanitalizeApiError(error)));
  }
}

export function* signup(signUpData: Signup) {
  try {
    const response: SignUpResponse = yield call(Api.signup, signUpData);

    yield put(SessionActions.setUser(response.data));
    yield put(SessionActions.setTokens(response.token, response.refreshToken));
    yield put(AuthActions.signupSuccess(response));
    RootNavigator.navigate('Home');
  } catch (error) {
    yield put(AuthActions.SignupFailure(sanitalizeApiError(error)));
  }
}

export function* logout() {
  yield put(SessionActions.reset());
  yield put(AuthActions.appStart('outside'));
}

export default function* root() {
  yield takeLatest(AuthTypes.INIT_APP, initApp);
  yield takeLatest(AuthTypes.APP_START, appStart);
  yield takeLatest(AuthTypes.LOGOUT, logout);

  yield takeLatest(AuthTypes.LOGIN, doLogin);
  yield takeLatest(AuthTypes.SIGNUP, signup);
}
