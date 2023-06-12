import React from 'react';
import '../../components/styles.css';
function FavoritesButton({ addToFavorites, isFavorite }) {
    return (
      <div>
        {isFavorite ? (
          <button disabled>Agregado a favoritos</button>
        ) : (
          <button onClick={addToFavorites}>Agregar a favoritos</button>
        )}
      </div>
    );
  }
  
  export default FavoritesButton;