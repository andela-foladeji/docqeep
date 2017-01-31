import React, {Component} from 'react';

/**
 *  class for viewing single document
 */
class ViewDocument extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.getADocument(this.props.params.id);
  }

  render() {
    if(this.props.doc.aDocument) {
      return(
        <div>
          <h3>{this.props.doc.aDocument.title}</h3>
          <p>{this.props.doc.aDocument.content}</p>
          <p>{'Access Level: '+this.props.doc.aDocument.access}</p>
          <p>{'Created On: '+this.props.doc.aDocument.createdAt}</p>
        </div>
      );
    } else {
      return(
        <div>
          <p>Document does not exist</p>
        </div>
      );
    }
  }
}

export default ViewDocument;
