import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {green600} from 'material-ui/styles/colors';

import Login from './Login';
import Signup from './Signup';

class DropDown extends Component{
  constructor() {
    super();
    this.state = {
      signin: true
    };
    this.formToDisplay = this.formToDisplay.bind(this);
  }

  formToDisplay() {
    switch(this.state.signin) {
      case true: {
        this.setState({signin: false});
        break;
      }
      case false: {
        this.setState({signin: true});
        break;
      }
    }
  }

  render() {
    return(
      <div className="dropDownForm">
        {this.state.signin ? <Login switch={this.formToDisplay} /> : <Signup switch={this.formToDisplay} />}
      </div>
    );
  }
};

export default DropDown;
