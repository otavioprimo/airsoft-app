import {put, take, spawn} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';
import NetInfo from '@react-native-community/netinfo';
import {OFFLINE, ONLINE} from 'redux-offline-queue';

export function* startWatchingNetworkConnectivity() {
  const channel = eventChannel((emmiter) => {
    const unsubscribe = NetInfo.addEventListener(emmiter);
    return () => unsubscribe();
  });

  try {
    while (true) {
      const connection = yield take(channel);

      if (connection.isConnected) {
        yield put({type: ONLINE});
      } else {
        yield put({type: OFFLINE});
      }
    }
  } finally {
    channel.close();
  }
}

export default function* root() {
  yield spawn(startWatchingNetworkConnectivity);
}
