import React from 'react';
import '../../components/styles.css';
function FavoritesButton({ addToFavorites, isFavorite, removeFromFavorites }) {
  return (
    <div>
      {isFavorite ? (
        <button onClick={removeFromFavorites}>Remover de favoritos</button>
      ) : (
        <button onClick={addToFavorites}>Agregar a favoritos</button>
      )}
    </div>
  );
}
  
export default FavoritesButton;