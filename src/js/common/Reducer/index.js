import { combineReducers } from 'redux';
import blocks from './BlocksReducer';
import currentBlock from './CurrentBlockReducer';
import transactions from './TransactionReducer';

export default combineReducers({
  blocks,
  transactions,
  currentBlock,
});
