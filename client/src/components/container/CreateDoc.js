import React, { Component } from 'react';

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

  createDocument(event) {
    event.preventDefault();
    this.props.createDoc(this.state);
  }

  render() {
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
          <span></span><br/>
          <button class="btn waves-effect waves-light" type="submit" name="action">Create Document </button>
        </form>
      </div>
    );
  }
}

export default CreateDoc;
