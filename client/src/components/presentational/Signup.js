import React, { Component } from 'react';
import {green600} from 'material-ui/styles/colors';

class Signup extends Component {
  constructor() {
    super();
    this.state = {roleId: 1};
    this.inputChange = this.inputChange.bind(this);
    this.invokeRegistration = this.invokeRegistration.bind(this);
  }

  inputChange(event, field) {
    this.setState({[field] : event.target.value});
  }

  invokeRegistration(event) {
    event.preventDefault();
    const name = this.state.fullname.split(' ');
    this.state.firstName = name[0];
    this.state.lastName = name[1];
    this.props.register(this.state);
  }

  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.invokeRegistration}>
          <div class="input-field col s6">
            <input required onChange={(event) => this.inputChange(event, 'fullname')} id="fullname" type="text" />
            <label for="fullname">Full Name</label>
          </div>
          <div class="input-field col s6">
            <input required onChange={(event) => this.inputChange(event, 'username')} id="username" type="text" />
            <label for="username">Username</label>
          </div>
          <div class="input-field col s6">
            <input onChange={(event) => this.inputChange(event, 'email')} id="email" type="email" />
            <label for="email">Email</label>
          </div>
          <div class="input-field col s6">
            <input onChange={(event) => this.inputChange(event, 'password')} id="password" type="password" />
            <label for="password">Password</label>
          </div>
          <div class="input-field col s6">
            <input onChange={(event) => this.inputChange(event, 'confirmpassword')} id="confirmpassword" type="password" />
            <label for="confirmpassword">Confirm Password</label>
          </div>
          <div class="input-field col s6">
            <select class="browser-default">
              <option value="">Choose role</option>
              <option value="1">Admin</option>
              <option value="2">Role</option>
            </select>
          </div>
          <div class="input-field col s12">
            <span>{this.props.displayMessage()}</span><br/>
              <button class="btn waves-effect waves-light" type="submit" name="action">Submit </button>
              <p>Existing user?
                <span
                  style={{color: green600}}
                  className="anchor" onTouchTap={this.props.switch}> Login
                </span>
              </p>
          </div>
        </form>
      </div>
    )
  }
}

export default Signup;
