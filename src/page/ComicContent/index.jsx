// ComicContent component
import React from 'react';
import FavoritesButton from '../../page/buttons/FavoritesButton.jsx';
// Importar archivo CSS personalizado en carpeta proyecto/components
import '../../components/styles.css';

function ComicContent({ comic, addToFavorites, isFavorite , removeFromFavorites}) {

  return (
    <div className="comic-details-container">
      <div className="comic-details-image">
        <img src={comic.image} alt={comic.title} />
      </div>
      <div className="comic-details-content">
        <h2>{comic.title}</h2>
        <p>{comic.description}</p>
        <FavoritesButton addToFavorites={addToFavorites} isFavorite={isFavorite} removeFromFavorites={removeFromFavorites}/>
      </div>
    </div>
  );
}


export default ComicContent;