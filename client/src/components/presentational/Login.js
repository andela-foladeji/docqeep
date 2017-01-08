import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {green600} from 'material-ui/styles/colors';

const Login = (props) => {
  return(
    <div>
      <TextField floatingLabelText="Username" id="username"/><br/>
      <TextField floatingLabelText="Password" id="password" type="password"/><br/>
      <RaisedButton label="Login" primary={true}/>
      <p>New user?
        <span
          style={{
            color: green600
          }}
          className="anchor" onTouchTap={props.switch}> Sign up</span>
      </p>
    </div>
  );
}

export default Login;
