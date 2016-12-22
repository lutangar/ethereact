import React, { PropTypes, PureComponent } from 'react';
import { ListItem } from 'material-ui/List';

class Transaction extends PureComponent {
  static propTypes = {
    transaction: PropTypes.string.isRequired,
  };

  render() {
    return (
      <ListItem
        className="transaction"
        primaryText={this.props.transaction}
      />
    );
  }
}

export default Transaction;
