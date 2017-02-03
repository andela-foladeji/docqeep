import React from 'react';
import Menu from '../presentational/Menu';

const Main = (props) => {
  return(
    <div>
      <Menu user={props.user} />
      <div class="container" style={{marginLeft: '25%'}}>
        { React.cloneElement(props.children, {createDoc: props.createDoc, editProfile: props.editProfile, doc: props.doc, getDoc: props.getDoc, getADocument: props.getADocument, user: props.user}) }
      </div>
    </div>
  );
};

export default Main;
