import React, { Component, PropTypes } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import CustomPropTypes from '../../PropTypes';
import Block from '../Block';

class Home extends Component {
  static propTypes = {
    blocks: PropTypes.arrayOf(CustomPropTypes.block),
    fetchCurrentBlock: PropTypes.func.isRequired,
    currentBlockNumber: PropTypes.number.isRequired,
  };

  componentWillMount() {
    this.props.fetchCurrentBlock();

    this.setState({
      intervalId: setInterval(this.props.fetchCurrentBlock, 500),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
      <div className="mdl-grid home">
        {this.props.blocks.length === 0 &&
          <CircularProgress className="mdl-cell--col-12" />
        }

        {this.props.blocks.map((block, key) =>
          <Block
            key={key}
            block={block}
            currentBlockNumber={this.props.currentBlockNumber}
          />
        )}
      </div>
    );
  }
}

export default Home;
