import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton'
import NavBar from '../components/presentational/NavBar';

class Index extends Component {
  render() {
    return(
      <MuiThemeProvider>
        <NavBar />
      </MuiThemeProvider>
    );
  }
}

export default Index;