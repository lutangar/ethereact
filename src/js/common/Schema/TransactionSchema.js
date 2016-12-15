import { Schema, arrayOf } from 'normalizr';

const Transaction = new Schema('transactions', { idAttribute: 'hash' });
Transaction.define({});

export const TransactionCollection = arrayOf(Transaction);
export default Transaction;
