import { fork } from 'redux-saga/effects';
import { watchWeb3APICalls } from './Web3Sagas';
import { watchFetchCurrentBlockNumberSuccess } from './BlockSagas';

export default function* root() {
  yield fork(watchWeb3APICalls);
  yield fork(watchFetchCurrentBlockNumberSuccess);
}
