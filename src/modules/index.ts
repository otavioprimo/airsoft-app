import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';

import authRedux from './auth/redux';

import {PersistPartial} from 'redux-persist/es/persistReducer';
import {AuthState} from '~/modules/auth/redux/types';

export interface AplicationState extends PersistPartial {
  auth: AuthState;
}

export const rootReducers = combineReducers({
  auth: authRedux.reducer,
});

export const rootSagas = function* rootSagas() {
  return yield all([authRedux.sagas()]);
};
