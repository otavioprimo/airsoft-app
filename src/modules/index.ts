import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';
import {reducer as offline} from 'redux-offline-queue';

import authRedux from './auth/redux';
import coreRedux from './core/redux';

import {PersistPartial} from 'redux-persist/es/persistReducer';
import {AuthState} from '~/modules/auth/redux/types';

export interface AplicationState extends PersistPartial {
  auth: AuthState;
}

export const rootReducers = combineReducers({
  offline,
  auth: authRedux.reducer,
});

export const rootSagas = function* rootSagas() {
  return yield all([authRedux.sagas(), coreRedux.sagas()]);
};
