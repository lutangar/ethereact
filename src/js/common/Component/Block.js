import React, { PropTypes, Component } from 'react';
import CustomPropTypes from '../PropTypes';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import LinearProgress from 'material-ui/LinearProgress';
import { List, ListItem } from 'material-ui/List';
import Transaction from './Transaction';

class Block extends Component {
  static propTypes = {
    currentBlockNumber: PropTypes.number.isRequired,
    block: CustomPropTypes.block.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const nestedItems = this.props.block.transactions.map((transaction, key) =>
      <Transaction key={key} transaction={transaction} />
    );

    return (
      <Card className="mdl-cell mdl-cell--3-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone block">
        <CardTitle title={`Block ${this.props.block.number}`} subtitle={this.props.block.hash} />
        <CardText className="transactions">
          <Paper zDepth={1}>
            <List>
              <ListItem
                open={this.state.open}
                primaryTogglesNestedList={true}
                onNestedListToggle={this.handleToggle}
                primaryText="Transactions"
                nestedItems={nestedItems}
              />
            </List>
            {this.props.block.number === this.props.currentBlockNumber &&
              <LinearProgress mode="indeterminate" />
            }
          </Paper>
        </CardText>
      </Card>
    )
  }
}

export default Block;
