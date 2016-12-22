import { put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { GET_CURRENT_BLOCK_NUMBER_SUCCESS } from '../Constant/Block';
import { fetchBlock } from '../Action/BlockActions';

export function* fetchCurrentBlock(action) {
  yield put(fetchBlock(action.result));
}

export function* watchFetchCurrentBlockNumberSuccess() {
  yield takeLatest(GET_CURRENT_BLOCK_NUMBER_SUCCESS, fetchCurrentBlock);
}
