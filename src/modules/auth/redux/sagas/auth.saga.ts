import {put, takeLatest, delay, call} from 'redux-saga/effects';
import {AuthActions, AuthTypes} from '../reducer/auth.reducer';

// import * as rootNavigation from '~/utils/rootNavigation';
import {Login, Signup} from '../types';
import Api from '~/modules/core/services/Api';
import {sanitalizeApiError} from '~/modules/core/services/api.helper';
import SignUpResponse from '~/interfaces/ApiResponse/UserResponse/SignUpResponse';
import {SessionActions} from '~/modules/session/redux/reducer/session.reducer';
import * as RootNavigator from '~/utils/rootNavigation';
import LoginResponse from '~/interfaces/ApiResponse/AuthResponse/LoginResponse';

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

export default function* root() {
  yield takeLatest(AuthTypes.LOGIN, doLogin);
  yield takeLatest(AuthTypes.SIGNUP, signup);
}
