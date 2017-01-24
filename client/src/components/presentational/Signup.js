import React from 'react';
import {green600} from 'material-ui/styles/colors';

const Signup = (props) => {
  const userDetails = {roleId: 1};

  const inputChange = (event, field) => {
    userDetails[field] = event.target.value;
  }

  const invokeRegistration = (event) => {
    event.preventDefault();
    const name = userDetails.fullname.split(' ');
    delete userDetails.fullname;
    userDetails.firstName = name[0];
    userDetails.lastName = name[1];
    props.register(userDetails);
  }

  return (
    <div className="row">
      <form className="col s12" onSubmit={invokeRegistration}>
        <div class="input-field col s12">
          <input required onChange={(event) => inputChange(event, 'fullname')} id="fullname" type="text" />
          <label for="fullname">Full Name</label>
        </div>
        <div class="input-field col s12">
          <input required onChange={(event) => inputChange(event, 'username')} id="username" type="text" />
          <label for="username">Username</label>
        </div>
        <div class="input-field col s12">
          <input onChange={(event) => inputChange(event, 'email')} id="email" type="email" />
          <label for="email">Email</label>
        </div>
        <div class="input-field col s12">
          <input onChange={(event) => inputChange(event, 'password')} id="password" type="password" />
          <label for="password">Password</label>
        </div>
        <div class="input-field col s12">
          <input onChange={(event) => inputChange(event, 'confirmpassword')} id="confirmpassword" type="password" />
          <label for="confirmpassword">Confirm Password</label>
        </div>
        <span></span><br/>
        <button class="btn waves-effect waves-light" type="submit" name="action">Submit
          <i class="material-icons right">Register</i>
        </button>
        <p>Existing user?
        <span
          style={{color: green600}}
          className="anchor" onTouchTap={props.switch}> Login
        </span>
      </p>
      </form>
    </div>
  );
}

export default Signup;
