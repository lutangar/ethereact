import * as BLOCK from '../Constant/Block';
import initialState from '../initialState';

export default function currentBlockReducer(state = initialState.currentBlock, action) {
  switch (action.type) {
    case BLOCK.GET_CURRENT_BLOCK_NUMBER_SUCCESS:
      return action.result;
    default:
      return state;
  }
}
