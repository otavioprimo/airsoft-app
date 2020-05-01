import {createStore, compose, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import reactotronSaga from 'reactotron-react-native';

import {rootReducers, rootSagas} from '~/modules';

import Reactotron from './reactotron';

// Configurações do redux-persist
const persistConfig = {
  key: 'store', // Chave que será salva no AsyncStorage
  storage: AsyncStorage,
  whitelist: [], // Deve ser passado qual o reducer deve ser salvo
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const sagaMiddleware = createSagaMiddleware({
  sagaMonitor: reactotronSaga.createSagaMonitor,
});

const Store = createStore(
  persistedReducer,
  compose(applyMiddleware(sagaMiddleware), Reactotron.createEnhancer()),
);

sagaMiddleware.run(rootSagas);

const persistor = persistStore(Store);

export {Store, persistor};
