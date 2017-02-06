import React, { Component } from 'react';
import {green600, red400} from 'material-ui/styles/colors';
import { emptyForm, displayMessage } from '../../helpers';

class CreateDoc extends Component {
  constructor() {
    super();
    this.state = {};
    this.inputChange = this.inputChange.bind(this);
    this.createDocument = this.createDocument.bind(this);
  }

  inputChange(event, field) {
    const textValue = event.target.value;
    this.setState({[field]: textValue});
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.doc.status === 200) {
      emptyForm(['title', 'content']);
    }
    this.setState({
      pending: false
    });
    displayMessage(nextProps.doc.message, nextProps.doc.done);
  }

  createDocument(event) {
    event.preventDefault();
    this.setState({ pending: true });
    this.props.createDoc(this.state);
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
          <button class={"btn waves-effect waves-light "+disabled} type="submit" name="action">{buttonText}</button>
        </form>
      </div>
    );
  }
}

export default CreateDoc;
