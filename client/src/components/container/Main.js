import React from 'react';
import Menu from '../presentational/Menu';
import DocumentDisplay from '../presentational/DocumentDisplay';

const Main = (props) => {
  
  return(
    <div>
      <Menu user={props.user} />
      <DocumentDisplay />
    </div>
  );
};

export default Main;
