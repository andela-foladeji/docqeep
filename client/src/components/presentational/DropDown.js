import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {green600, red400} from 'material-ui/styles/colors';

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
    this.displayMessage = this.displayMessage.bind(this);
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
    this.setState({ messageStatus: nextProps.user.done, message: nextProps.user.message });
  }

  displayMessage() {
    if(this.state.messageStatus === true) {
      setTimeout(() => {
        this.setState({ messageStatus: null, message: null});
        this.props.loggedIn();
        browserHistory.push('/main/create_document');
      }, 3000);
      
      return <span style={this.successStyle}>{this.state.message}</span>;
    } else if(this.state.messageStatus === false) {
      setTimeout(() => {
        this.setState({ messageStatus: null, message: null});
      }, 5000);
      return <span style={this.errorStyle}>{this.state.message}</span>;
    }
  }

  render() {
    return (
      <div className="dropDownForm">
        {this.state.signin
          ? <Login login={this.props.login} displayMessage={this.displayMessage} switch={this.formToDisplay} />
          : <Signup register={this.props.register} switch={this.formToDisplay} displayMessage={this.displayMessage} />
        }
      </div>
    );
  }
};

export default DropDown;
