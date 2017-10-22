import React, { PropTypes, Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { indigo500, indigo700, purpleA200 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import NetworkStatus from 'react-web3-network-status';

injectTapEventPlugin();

class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  static getMuiTheme() {
    return getMuiTheme({
      palette: {
        primary1Color: indigo500,
        primary2Color: indigo700,
        accent1Color: purpleA200,
      },
      appBar: {
        height: 50,
      },
    });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={App.getMuiTheme()}>
        <div>
          <NetworkStatus />
          <AppBar title="Ethereact" />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
