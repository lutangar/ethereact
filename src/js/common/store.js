import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import 'babel-polyfill';
import createLogger from 'redux-logger';
import initialState from './initialState';
import rootReducer from './Reducer';
import rootSaga from './Saga';

const saga = createSagaMiddleware();
const logger = createLogger();
const store = applyMiddleware(saga, logger)(createStore)(rootReducer, initialState);

saga.run(rootSaga);

export default store;
