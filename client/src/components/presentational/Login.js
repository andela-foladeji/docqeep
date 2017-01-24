import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {green600} from 'material-ui/styles/colors';

const Login = (props) => {
  const loginDetails = {};
  console.log(props);
  const inputChange = (event, field) => {
    loginDetails[field] = event.target.value;
  }

  const invokeLogin = (event) => {
    event.preventDefault();
    props.login(loginDetails);
  }

  return(
    <div className="row">
      <form className="col s12" onSubmit={invokeLogin}>
        <div class="input-field col s12">
          <input onChange={(event) => inputChange(event, 'email')} id="loginmail" type="email" />
          <label for="email">Email</label>
        </div>
        <div class="input-field col s12">
          <input onChange={(event) => inputChange(event, 'password')} id="loignpassword" type="password" />
          <label for="password">Password</label>
        </div>
        <span>{props.user}</span><br/>
        <button class="btn waves-effect waves-light" type="submit" name="action">Login</button>
        <p>New user?
        <span
          style={{color: green600}}
          className="anchor" onTouchTap={props.switch}> Sign up
        </span>
      </p>
      </form>
    </div>
  );
}

export default Login;
