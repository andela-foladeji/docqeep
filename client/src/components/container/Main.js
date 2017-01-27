import React from 'react';
import Menu from '../presentational/Menu';

const Main = (props) => {
  return(
    <div>
      <Menu user={props.user} />
      <div class="container" style={{marginLeft: '25%'}}>
        { React.cloneElement(props.children, {createDoc: props.createDoc, doc: props.doc, getDoc: props.getDoc}) }
      </div>
    </div>
  );
};

export default Main;
