import * as TRANSACTION from '../Constant/Transaction';
import initialState from '../initialState';
import TransactionSchema from '../Schema/TransactionSchema';

export default function transactionReducer(
  state = initialState[TransactionSchema.getKey()],
  action
) {
  switch (action.type) {
    case TRANSACTION.GET_TRANSACTION_SUCCESS:
      return Object.assign(state, action.result);
    default:
      return state;
  }
}
