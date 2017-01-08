import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green600, green800} from 'material-ui/styles/colors';

import NavBar from '../components/presentational/NavBar';
import IndexContent from '../components/presentational/IndexContent';
class Index extends Component {
  render() {
    const muiTheme = getMuiTheme({
      palette: {
        primary1Color: green600,
        primary2Color: green800,
        linkColor: green600
      }
    });

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <section>
          <NavBar/>
          <IndexContent/>
        </section>
      </MuiThemeProvider>
    );
  }
}

export default Index;