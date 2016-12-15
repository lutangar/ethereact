import { Schema, arrayOf } from 'normalizr';

const Block = new Schema('blocks', { idAttribute: 'hash' });
Block.define({});

export const BlockCollection = arrayOf(Block);
export default Block;
