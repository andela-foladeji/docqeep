import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {green600} from 'material-ui/styles/colors';

class Login extends Component {
  constructor(props) {
    super();
    this.state = {};
    this.invokeLogin = this.invokeLogin.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(event, field) {
    const textValue = event.target.value;
    this.setState({[field]: textValue});
  }

  invokeLogin(event) {
    event.preventDefault();
    this.props.login(this.state);
  }

  render() {
    return(
      <div className="row">
        <form className="col s12" onSubmit={this.invokeLogin}>
          <div class="input-field col s12">
            <input onChange={(event) => this.inputChange(event, 'username')} id="loginusername" type="text" />
            <label for="username">Username</label>
          </div>
          <div class="input-field col s12">
            <input onChange={(event) => this.inputChange(event, 'password')} id="loignpassword" type="password" />
            <label for="password">Password</label>
          </div>
          <span>{this.props.user()}</span><br/>
          <button class="btn waves-effect waves-light" type="submit" name="action">Login</button>
          <p>New user?
          <span
            style={{color: green600}}
            className="anchor" onTouchTap={this.props.switch}> Sign up
          </span>
        </p>
        </form>
      </div>
    );
  }  
}

export default Login;
