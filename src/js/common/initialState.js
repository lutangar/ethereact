import BlockSchema from './Schema/BlockSchema';
import TransactionSchema from './Schema/TransactionSchema';

export default {
  [BlockSchema.getKey()]: {},
  [TransactionSchema.getKey()]: {},
  currentBlock: 0,
}
