import React from 'react';

const DocumentDisplay = () => {
  const tilesData = [
    {
      title: 'Title 1',
      creator: 'Owner 1',
      text: 'A random text 1'
    },
    {
      title: 'Title 2',
      creator: 'Owner 2',
      text: 'A random text 2'
    },
    {
      title: 'Title 3',
      creator: 'Owner 3',
      text: 'A random text 3'
    },
    {
      title: 'Title 4',
      creator: 'Owner 1',
      text: 'A random text 1'
    },
    {
      title: 'Title 5',
      creator: 'Owner 2',
      text: 'A random text 2'
    },
    {
      title: 'Title 6',
      creator: 'Owner 3',
      text: 'A random text 3'
    }
  ];
  
  return(
    <div class="container" style={{marginLeft: '25%'}}>
      <div class="row">
        {tilesData.map((tile) => (
          <div className=" col s6 m4 l3" key={tile.title}>
            <div class="card grey lighten-3 a_doc">
              <div class="card-content black-text doc_content">
                <span class="card-title">{tile.title}</span>
                <p>{tile.text}</p>
              </div>
              <div class="card-action">
                <a href="#">View</a>
                <a href="#">Edit</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentDisplay;
