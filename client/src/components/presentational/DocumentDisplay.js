import React from 'react';

const DocumentDisplay = (props) => {
  props.getDoc();
  const allDocs = (props.doc.doc) ? props.doc.doc : [];
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
              <a href="#">View</a>
              <a href="#">Edit</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DocumentDisplay;
