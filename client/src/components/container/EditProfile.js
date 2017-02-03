import React, { Component } from 'react';

class EditProfile extends Component {
  constructor() {
    super();
    this.state = {};
    this.inputChange = this.inputChange.bind(this);
    this.getValue = this.getValue.bind(this);
    this.invokeProfileEdit = this.invokeProfileEdit.bind(this);
  }

  // componentWillReceiveProps(nextprops) {
  //   this.setState(nextprops.user.user);
  // }

  componentDidMount() {
    console.log('mounted')
    if(Object.keys(this.state).length === 0) {
      console.log('re renders');
      console.log(this.props.user);
      this.setState(this.props.user.user);
    }
  }

  inputChange(event, field) {
    const textValue = event.target.value;
    this.setState({[field]: textValue});
  }

  getValue(field) {
    return (this.state[field]) ? this.state[field] : '';
  }

  shouldComponentUpdate(a, b) {
    console.log('should update');
    return true;
  }

  invokeProfileEdit(event) {
    event.preventDefault();
    this.props.editProfile(this.state);
  }

  render() {
    return(
      <div className="row">
        <h4 class="center-align">EDIT PROFILE</h4>
        <form className="col s12" onSubmit={this.invokeProfileEdit}>
          <div class="input-field col s12 m9 l6 offset-l3">
            <input required onChange={(event) => this.inputChange(event, 'firstName')} placeholder="Placeholder" id="firstName" type="text" value={this.getValue('firstName')} />
            <label for="firstName">FirstName</label>
          </div>
          <div class="input-field col s12 m9 l6 offset-l3">
            <input required onChange={(event) => this.inputChange(event, 'lastName')} placeholder="Placeholder" id="lastname" type="text" value={this.getValue('lastName')} />
            <label for="lastname">LastName</label>
          </div>
          <div class="input-field col s12 m9 l6 offset-l3">
            <input required onChange={(event) => this.inputChange(event, 'username')} placeholder="Placeholder" id="profileUsername" type="text" value={this.getValue('username')} />
            <label for="profileUsername">Username</label>
          </div>
          <div class="input-field col s12 m9 l6 offset-l3">
            <input required onChange={(event) => this.inputChange(event, 'email')} placeholder="Placeholder" id="profileemail" type="email" value={this.getValue('email')} />
            <label for="profileemail">Email</label>
          </div>
          <div class="input-field col s12 m9 l6 offset-l3">
            <input required onChange={(event) => this.inputChange(event, 'password')} placeholder="Placeholder" id="profilepassword" type="password" />
            <label for="profilepassword">Password</label>
          </div>
          <div class="input-field col s12 m9 l6 offset-l3">
            <input required onChange={(event) => this.inputChange(event, 'confirmpassword')} placeholder="Placeholder" id="profileconfirmpassword" type="password" />
            <label for="profileconfirmpassword">Confirm Password</label>
          </div>
          <span></span><br/>
          <input type="hidden" value={this.getValue('id')} />
          <div class="input-field col s12 m9 l6 offset-l3">
            <button class="btn waves-effect waves-light" type="submit" name="action">Save</button>
          </div>
        </form>
      </div>
    );
  }
}

// const EditProfile = (props) => {
//   console.log(props);

//   return(
//     <div>
//       Nothing much
//     </div>
//   );
// };

export default EditProfile;
