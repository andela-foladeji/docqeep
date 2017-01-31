import React, { Component } from 'react';
import { Link } from 'react-router';

class DocumentDisplay extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.getDoc();
  }

  render() {
    const allDocs = (this.props.doc.allDocuments) ? this.props.doc.allDocuments : [];
    return(
      <div class="row">
        {allDocs.map((tile) => (
          <div className=" col s6 m4 l3" key={tile.title}>
            <div class="card grey lighten-3 a_doc">
              <div class="card-content black-text doc_content">
                <span class="card-title">{tile.title}</span>
                <p>{tile.content}</p>
              </div>
              <div class="card-action">
                <Link to={"/main/document/"+tile.id}>View</Link>
                {/*<a href="#">Edit</a>*/}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default DocumentDisplay;
