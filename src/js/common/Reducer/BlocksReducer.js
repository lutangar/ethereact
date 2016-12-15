import * as BLOCK from '../Constant/Block';
import initialState from '../initialState';
import BlockSchema  from '../Schema/BlockSchema';

export default function blockReducer(state = initialState[BlockSchema.getKey()], action) {
  switch (action.type) {
    case BLOCK.GET_BLOCK_SUCCESS:
      return Object.assign({}, state, action.entities[BlockSchema.getKey()]);
    case BLOCK.GET_BLOCK_PROPERTY_SUCCESS:
      return Object.assign(state, action.result);
    default:
      return state;
  }
}
