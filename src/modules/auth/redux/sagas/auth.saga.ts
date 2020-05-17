import {put, takeLatest, delay} from 'redux-saga/effects';
import {AuthActions, AuthTypes} from '../reducer/auth.reducer';

// import * as rootNavigation from '~/utils/rootNavigation';
import {Login} from '../types';

export function* doLogin(login: Login) {
  yield delay(2000);

  // yield put(AuthActions.loginFailure('Email ou senha inválido'));
  yield put(
    AuthActions.loginSuccess({message: 'Logado com sucesso', data: login}),
  );
  // rootNavigation.navigate('Signup');
}

export default function* root() {
  yield takeLatest(AuthTypes.LOGIN, doLogin);
}
