import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {green600} from 'material-ui/styles/colors';

import Login from './Login';
import Signup from './Signup';

class DropDown extends Component{
  constructor(props) {
    super();
    this.state = {
      signin: true
    };
    this.formToDisplay = this.formToDisplay.bind(this);
    this.displayMessage = this.displayMessage.bind(this);
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

  displayMessage() {
    console.log('message called');
    return this.props.user.message;
  }

  render() {
    return(
      <div className="dropDownForm">
        {this.state.signin ? <Login login={this.props.login} user={this.displayMessage} switch={this.formToDisplay} /> : <Signup user={this.displayMessage} register={this.props.register} switch={this.formToDisplay} />}
      </div>
    );
  }
};

export default DropDown;
