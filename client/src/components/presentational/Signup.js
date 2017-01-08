import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {green600} from 'material-ui/styles/colors';

const Signup = (props) => {
  return (
    <div>
      <TextField floatingLabelText="Full Name"/><br/>
      <TextField floatingLabelText="Password" type="password"/><br/>
      <TextField floatingLabelText="Confirm Password" type="password"/><br/>
      <TextField floatingLabelText="Email"/><br/>
      <RaisedButton label="Register" primary={true}/>
      <p>Existing user?
        <span
          style={{color: green600}}
          className="anchor" onTouchTap={props.switch}> Login
        </span>
      </p>
    </div>
  );
}

export default Signup;
