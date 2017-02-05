import React, { Component } from 'react';
import {green600, red400} from 'material-ui/styles/colors';

class CreateDoc extends Component {
  constructor() {
    super();
    this.state = {};
    this.inputChange = this.inputChange.bind(this);
    this.createDocument = this.createDocument.bind(this);
    this.errorStyle = {
      color: red400
    };
    this.successStyle = {
      color: green600
    }
    this.displayMessage = this.displayMessage.bind(this);
  }

  inputChange(event, field) {
    const textValue = event.target.value;
    this.setState({[field]: textValue});
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({
      pending: false,
      messageStatus: nextProps.doc.done,
      message: nextProps.doc.message
    });
  }

  createDocument(event) {
    this.setState({ pending: true });
    event.preventDefault();
    this.props.createDoc(this.state);
  }

  displayMessage() {
    if(this.state.messageStatus) {
      setTimeout(() => {
        this.setState({ messageStatus: null, message: null});
      }, 5000);
      return <span style={this.successStyle}>{this.state.message}</span>;
    } else if(this.state.messageStatus === false) {
      setTimeout(() => {
        this.setState({ messageStatus: null, message: null});
      }, 5000);
      return <span style={this.errorStyle}>{this.state.message}</span>;
    }
  } 

  render() {
    let buttonText = 'Create Document'
    let disabled = '';
    if (this.state.pending) {
      buttonText = 'Processing...';
      disabled = 'disabled';
    }
    return(
      <div class="row">
        <h3>Create Document</h3>
        <form className="col s12 m10 offset-m1 l6 offset-l3" onSubmit={this.createDocument}>
          <div class="input-field col s12">
            <input required onChange={(event) => this.inputChange(event, 'title')} id="title" type="text" />
            <label for="title">Title</label>
          </div>
          <div class="input-field col s12">
            <textarea id="content" required onChange={(event) => this.inputChange(event, 'content')} class="materialize-textarea"></textarea>
            <label for="content">Content</label>
          </div>
          <div class="input-field col s12">
            <select class="browser-default" onChange={(event) => this.inputChange(event, 'access')}>
              <option value="">Choose Access</option>
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="role">Role</option>
            </select>
          </div>
          <span class="message">{this.displayMessage()}</span><br/>
          <button class={"btn waves-effect waves-light "+disabled} type="submit" name="action">{buttonText}</button>
        </form>
      </div>
    );
  }
}

export default CreateDoc;
