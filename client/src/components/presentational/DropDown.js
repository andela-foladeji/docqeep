import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {green600, red400} from 'material-ui/styles/colors';

import Login from './Login';
import Signup from './Signup';

class DropDown extends Component{
  constructor(props) {
    super();
    this.state = {
      signin: true
    };
    this.errorStyle = {
      color: red400,
    };
    this.successStyle = {
      color: green600
    }
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
    if(this.props.user.done === false) {
      return <span style={this.errorStyle}>{this.props.user.message}</span>;
    } else if(this.props.user.done === true) {
      setTimeout(() => {
        this.props.loggedIn();
        browserHistory.push('main');
      }, 3000)
      return <span style={this.successStyle}>{this.props.user.message}</span>;
    }
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
