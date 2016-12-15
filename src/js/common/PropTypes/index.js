import { PropTypes } from 'react';

const transaction = PropTypes.shape({
  hash: PropTypes.string.isRequired,
  gas: PropTypes.string,
  transactionIndex: PropTypes.string,
});

const block = PropTypes.shape({
  hash: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  transactions: PropTypes.arrayOf(PropTypes.string),
  timestamp: PropTypes.number,
});

export default { transaction, block };
