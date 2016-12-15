import * as CONSTANT from '../Constant';
import * as TRANSACTION from '../Constant/Transaction';
import TransactionSchema from '../Schema/TransactionSchema';

export const fetchTransaction = transactionHash => ({
  type: CONSTANT.WEB3_API_CALL,
  types: [TRANSACTION.GET_TRANSACTION, TRANSACTION.GET_TRANSACTION_SUCCESS, TRANSACTION.GET_TRANSACTION_ERROR],
  schema: TransactionSchema,
  args: [transactionHash],
});

export const fetchTransactionFromBlock = blockHash => ({
  type: CONSTANT.WEB3_API_CALL,
  types: [TRANSACTION.GET_TRANSACTION_FROM_BLOCK, TRANSACTION.GET_TRANSACTION_SUCCESS, TRANSACTION.GET_TRANSACTION_ERROR],
  schema: TransactionSchema,
  args: [blockHash],
});
