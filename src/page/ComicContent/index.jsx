// ComicContent component
import React from 'react';
// Importar archivo CSS personalizado en carpeta proyecto/components
import '../../components/styles.css';

function ComicContent({ comic }) {
  return (
    <div className="comic-details-container">
      <img src={comic.image} alt={comic.title} style={{ width: '20%' }} />
      <div className="comic-details-content">
        <h2>Comic Details</h2>
        <p>Title: {comic.title}</p>
        <p>Description: {comic.description}</p>
      </div>
    </div>
  );
}

export default ComicContent;