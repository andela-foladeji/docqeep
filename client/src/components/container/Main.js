import React, { Component } from 'react';
import Menu from '../presentational/Menu';
import {green600, red400} from 'material-ui/styles/colors';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    // this.displayMessage = this.displayMessage.bind(this);
    this.errorStyle = {
      color: red400
    };
    this.successStyle = {
      color: green600
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   const { user } = this.props;
  //   if(user) {
  //     console.log(user);
  //     this.setState({ messageStatus: user.done, message: user.message });
  //   }
  // }


  render() {
    return(
      <div>
        <Menu user={this.props.user} />
        <div class="container" style={{marginLeft: '25%'}}>
          { React.cloneElement(this.props.children, {createDoc: this.props.createDoc, editProfile: this.props.editProfile, doc: this.props.doc, getDoc: this.props.getDoc, getADocument: this.props.getADocument, user: this.props.user}) }
        </div>
      </div>
    );
  }
}

export default Main;
