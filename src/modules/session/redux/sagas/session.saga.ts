import {SetUser, SetTokens} from '../types';
import {takeLatest} from 'redux-saga/effects';
import {SessionTypes} from '../reducer/session.reducer';

export function* setUser({}: SetUser) {}

export function* setTokens({}: SetTokens) {}

export default function* root() {
  yield takeLatest(SessionTypes.SET_USER, setUser);
  yield takeLatest(SessionTypes.SET_TOKENS, setTokens);
}
