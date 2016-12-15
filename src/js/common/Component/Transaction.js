import React, { PropTypes, Component } from 'react';
import { ListItem } from 'material-ui/List';

class Transaction extends Component {
  static propTypes = {
    transaction: PropTypes.string.isRequired,
  };

  render() {
    return (
      <ListItem
        className="transaction"
        primaryText={this.props.transaction}
      />
    )
  }
}

export default Transaction;
