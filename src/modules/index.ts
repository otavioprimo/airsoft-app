import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';
// @ts-ignore
import {reducer as offline} from 'redux-offline-queue';

import authRedux from './auth/redux';
import coreRedux from './core/redux';
import sessionRedux from './session/redux';

import {PersistPartial} from 'redux-persist/es/persistReducer';
import {AuthState} from '~/modules/auth/redux/types';
import {SessionState} from './session/redux/types';

export interface AplicationState extends PersistPartial {
  auth: AuthState;
  session: SessionState;
}

export const rootReducers = combineReducers({
  offline,
  auth: authRedux.reducer,
  session: sessionRedux.reducer,
});

export const rootSagas = function* rootSagas() {
  return yield all([authRedux.sagas(), coreRedux.sagas()]);
};
