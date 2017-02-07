import React, { Component } from 'react';
import { Link } from 'react-router';

class DocumentDisplay extends Component {
  constructor() {
    super();
    this.state = { pending: true };
  }

  componentWillMount() {
    this.props.getDoc();
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({ pending: false });
  }

  render() {
    if(this.state.pending) {
      return(
        <div class="row">
          <div class="valign-wrapper loader-wrapper">
            <img class="loader valign" src="../img/loader.gif" />
          </div>
        </div>
      );
    }
    const allDocs = (this.props.doc.allDocuments) ? this.props.doc.allDocuments : [];
    if(allDocs.length === 0) {
      return(
        <div class="row">
          <div class="valign-wrapper loader-wrapper">
            <img class="loader valign" src="../img/empty.jpg"/>
          </div>
        </div>
      ); 
    }
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
