import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ComicDetails() {
  const [comic, setComic] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);


    const fetchComic = async () => {
      const id = localStorage.getItem('id');
      if (!id) {
        console.error('ID no encontrado en el almacenamiento local');
        return;
      }

      try {
        const response = await axios.get('https://marvel-api-production.up.railway.app/api/comics/getComic/', { id: id });
        const data = response.data;
        setComic(data);
      } catch (error) {
        console.error(error);
        // Manejo de errores
      }
    };
    fetchComic();

  

  const addToFavorites = async () => {
    try {
      const response = await axios.post('https://marvel-api-production.up.railway.app/api/comics/favorite', {
        comicId: comic.id,
        token: localStorage.getItem('token'),
        // Otros datos que necesites enviar al backend
      });

      setIsFavorite(true);
    } catch (error) {
      console.error(error);
      // Manejo de errores
    }
  };

  if (!comic) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <img src={comic.image} width="600" height="200" alt={comic.title} />
      <h2>Comic Details</h2>
      <p>ID: {comic.id}</p>
      <p>Title: {comic.title}</p>
      <p>Description: {comic.description}</p>
      {isFavorite ? (
        <button disabled>Agregado a favoritos</button>
      ) : (
        <button onClick={addToFavorites}>Agregar a favoritos</button>
      )}
    </div>
  );
}

export default ComicDetails;