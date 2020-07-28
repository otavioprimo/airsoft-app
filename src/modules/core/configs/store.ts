// @ts-nocheck

import {createStore, compose, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import reactotronSaga from 'reactotron-react-native';
import {
  seamlessImmutableReconciler,
  seamlessImmutableTransformCreator,
} from 'redux-persist-seamless-immutable';
import {
  offlineMiddleware,
  suspendSaga,
  consumeActionMiddleware,
} from 'redux-offline-queue';
import {REHYDRATE} from 'redux-persist';

import {rootReducers, rootSagas} from '~/modules';

import Reactotron from './reactotron';

const transformerConfigRoot = {
  whitelistPerReducer: {},
  blacklistPerReducer: {},
};

// Configurações do redux-persist
const persistConfig = {
  key: 'store', // Chave que será salva no AsyncStorage
  storage: AsyncStorage,
  stateReconciler: seamlessImmutableReconciler,
  transforms: [seamlessImmutableTransformCreator(transformerConfigRoot)],
  whitelist: ['session'], // Deve ser passado qual o reducer deve ser salvo
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const sagaMiddleware = createSagaMiddleware({
  sagaMonitor: reactotronSaga.createSagaMonitor(),
});

const middlewares = [];

middlewares.push(offlineMiddleware({
  additionalTriggers: REHYDRATE,
}));
middlewares.push(suspendSaga(sagaMiddleware));
middlewares.push(consumeActionMiddleware());

const Store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middlewares), Reactotron.createEnhancer()),
);

sagaMiddleware.run(rootSagas);

const persistor = persistStore(Store);

export {Store, persistor};
