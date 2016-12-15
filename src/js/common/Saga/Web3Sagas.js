import { put, call } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { normalize } from 'normalizr';
import { WEB3_API_CALL } from '../Constant';
import Web3 from '../Ethereum/Web3';

const createCallback = (resolve, reject) => (error, result) => {
  if (!error) {
    resolve(result);
  }
  reject(error);
};

function callWeb3MethodAsPromise(method, args = []) {
  return new Promise((resolve, reject) => {
    if (!Web3.hasOwnProperty(method)) {
      reject(new Error(`Method '${method} does'nt exists in Web3 API.`));
    }

    return Web3[method](...args, createCallback(resolve, reject));
  });
}

export function* web3APICall(action) {
  const [ method, successActionType, failureActionType ] = action.types;
  const args = action.args || [];
  const schema = action.schema;

  try {
    const result = yield call(callWeb3MethodAsPromise, method, args);
    if (schema) {
      yield put({ type: successActionType, ...normalize(result, schema) });
    } else {
      yield put({ type: successActionType, result});
    }
  } catch (e) {
    yield put({ type: failureActionType, e });
  }
}

export function* watchWeb3APICalls() {
  yield takeEvery(WEB3_API_CALL, web3APICall);
}
