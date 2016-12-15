import * as CONSTANT from '../Constant';
import * as BLOCK from '../Constant/Block';
import BlockSchema from '../Schema/BlockSchema';

export const fetchBlock = hash => ({
  type: CONSTANT.WEB3_API_CALL,
  types: [BLOCK.GET_BLOCK, BLOCK.GET_BLOCK_SUCCESS, BLOCK.GET_BLOCK_ERROR],
  schema: BlockSchema,
  args: [hash],
});

export const fetchBlockTransactionCount = hash => ({
  type: CONSTANT.WEB3_API_CALL,
  types: [BLOCK.GET_BLOCK_TRANSACTION_COUNT, BLOCK.GET_BLOCK_PROPERTY_SUCCESS, BLOCK.GET_BLOCK_PROPERTY_ERROR],
  args: [hash],
  property: 'transactionCount',
});

export const fetchUncle = hash => ({
  type: CONSTANT.WEB3_API_CALL,
  types: [BLOCK.GET_UNCLE, BLOCK.GET_BLOCK_SUCCESS, BLOCK.GET_BLOCK_ERROR],
  schema: BlockSchema,
  args: [hash],
});

export const fetchBlockUncleCount = hash => ({
  type: CONSTANT.WEB3_API_CALL,
  types: [BLOCK.GET_BLOCK_UNCLE_COUNT, BLOCK.GET_BLOCK_PROPERTY_SUCCESS, BLOCK.GET_BLOCK_PROPERTY_ERROR],
  property: 'uncleCount',
  args: [hash],
});

export const fetchCurrentBlockNumber = () => ({
  type: CONSTANT.WEB3_API_CALL,
  types: [
    BLOCK.GET_CURRENT_BLOCK_NUMBER,
    BLOCK.GET_CURRENT_BLOCK_NUMBER_SUCCESS,
    BLOCK.GET_CURRENT_BLOCK_NUMBER_ERROR,
  ],
});
