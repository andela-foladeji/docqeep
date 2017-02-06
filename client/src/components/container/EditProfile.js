import React, { Component } from 'react';
import {green600, red400} from 'material-ui/styles/colors';
import { emptyForm, displayMessage } from '../../helpers';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    if(this.props.user) {
      this.state = this.props.user;
    } else {
      this.state = {};
    }
    this.errorStyle = {
      color: red400
    };
    this.successStyle = {
      color: green600
    }
    this.inputChange = this.inputChange.bind(this);
    this.getValue = this.getValue.bind(this);
    this.invokeProfileEdit = this.invokeProfileEdit.bind(this);
  }

  componentWillReceiveProps(nextprops) {
    if(nextprops.user.done) {
      emptyForm(['profilepassword', 'profileconfirmpassword']);
    }
    displayMessage(nextprops.user.message, nextprops.user.done);
    this.setState({
      pending: false
    });
  }

  inputChange(event, field) {
    const textValue = event.target.value;
    this.setState({[field]: textValue});
  }

  getValue(field) {
    return (this.state[field]) ? this.state[field] : '';
  }

  invokeProfileEdit(event) {
    event.preventDefault();
    this.setState({ pending: true });
    if(this.state.password != this.state.confirmpassword) {
      this.setState({
        message: 'Passwords do not match',
        messageStatus: false,
        pending: false
      });
      return;
    }
    this.props.editProfile(this.state);
  }


  render() {
    let buttonText = 'Save'
    let disabled = '';
    if (this.state.pending) {
      buttonText = 'Processing...';
      disabled = 'disabled';
    }

    return(
      <div className="row">
        <h4 class="center-align">EDIT PROFILE</h4>
        <form className="col s12" onSubmit={this.invokeProfileEdit}>
          <div class="input-field col s12 m9 l6 offset-l3">
            <input required onChange={(event) => this.inputChange(event, 'firstName')} id="firstName" type="text" value={this.getValue('firstName')} />
            <label for="firstName" class="active">FirstName</label>
          </div>
          <div class="input-field col s12 m9 l6 offset-l3">
            <input required onChange={(event) => this.inputChange(event, 'lastName')} id="lastname" type="text" value={this.getValue('lastName')} />
            <label for="lastname" class="active">LastName</label>
          </div>
          <div class="input-field col s12 m9 l6 offset-l3">
            <input required onChange={(event) => this.inputChange(event, 'username')} id="profileUsername" type="text" value={this.getValue('username')} />
            <label for="profileUsername" class="active">Username</label>
          </div>
          <div class="input-field col s12 m9 l6 offset-l3">
            <input required onChange={(event) => this.inputChange(event, 'email')} id="profileemail" type="email" value={this.getValue('email')} />
            <label for="profileemail" class="active">Email</label>
          </div>
          <div class="input-field col s12 m9 l6 offset-l3">
            <input required onChange={(event) => this.inputChange(event, 'password')} id="profilepassword" type="password" />
            <label for="profilepassword" class="active">Password</label>
          </div>
          <div class="input-field col s12 m9 l6 offset-l3">
            <input required onChange={(event) => this.inputChange(event, 'confirmpassword')} id="profileconfirmpassword" type="password" />
            <label for="profileconfirmpassword" class="active">Confirm Password</label>
          </div>
          <div class="input-field col s12 m9 l6 offset-l3">
            <input type="hidden" value={this.getValue('id')} />
            <button class={"btn waves-effect waves-light " + disabled} type="submit" name="action">{ buttonText }</button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditProfile;
