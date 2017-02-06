import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {green600, red400} from 'material-ui/styles/colors';
import { displayMessage } from '../../helpers';

import Login from './Login';
import Signup from './Signup';

class DropDown extends Component {
  constructor(props) {
    super();
    this.state = {
      signin: true,
    };
    this.errorStyle = {
      color: red400
    };
    this.successStyle = {
      color: green600
    }
    this.formToDisplay = this.formToDisplay.bind(this);
  }

  formToDisplay() {
    this.setState({ messageStatus: null, message: null});
    switch (this.state.signin) {
      case true:
        {
          this.setState({signin: false});
          break;
        }
      case false:
        {
          this.setState({signin: true});
          break;
        }
    }
  }

  componentWillReceiveProps(nextProps) {
    displayMessage(nextProps.user.message, nextProps.user.done);
    if(nextProps.user.done) {
      this.props.loggedIn();
      setTimeout(() => {
        browserHistory.push('/main/create_document');
      }, 4000);
    }
  }

  render() {
    return (
      <div className="dropDownForm">
        {this.state.signin
          ? <Login login={this.props.login} switch={this.formToDisplay} />
          : <Signup register={this.props.register} switch={this.formToDisplay} />
        }
      </div>
    );
  }
};

export default DropDown;
