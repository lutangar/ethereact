import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import 'babel-polyfill';
import createLogger from 'redux-logger';
import initialState from './initialState';
import rootReducer from './Reducer';
import rootSaga from './Saga';

const sagaMiddleware = createSagaMiddleware();

export default applyMiddleware(
  sagaMiddleware
)(createStore)(rootReducer, initialState);

sagaMiddleware.run(rootSaga);
