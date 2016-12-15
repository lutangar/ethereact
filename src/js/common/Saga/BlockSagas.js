import { put, call, take } from 'redux-saga/effects';
import { takeEvery, takeLatest } from 'redux-saga';
import { WEB3_API_CALL } from '../Constant';
import { GET_CURRENT_BLOCK_NUMBER_SUCCESS } from '../Constant/Block';
import { fetchBlock } from '../Action/BlockActions';

export function* fetchCurrentBlock(action) {
  yield put(fetchBlock(action.result));
}

export function* watchFetchCurrentBlockNumberSuccess() {
  yield takeLatest(GET_CURRENT_BLOCK_NUMBER_SUCCESS, fetchCurrentBlock);
}
