import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green600, green800} from 'material-ui/styles/colors';

import NavBar from '../components/presentational/NavBar';
class Index extends Component {
  render() {
    const muiTheme = getMuiTheme({
      palette: {
        primary1Color: '#6BBD6E',
        primary2Color: green800,
        linkColor: green600
      }
    });

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <section>
          <NavBar/>
          {this.props.children}
        </section>
      </MuiThemeProvider>
    );
  }
}

export default Index;