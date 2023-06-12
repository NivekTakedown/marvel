import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import Header from '../page/header/index.jsx';
import ComicContent from '../page/ComicContent/index.jsx';
import FavoritesButton from '../page/buttons/FavoritesButton.jsx';

function ComicDetails() {
  const [comic, setComic] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchComic = async () => {
      const id = localStorage.getItem('id');
      if (!id) {
        console.error('ID no encontrado en el almacenamiento local');
        return;
      }

      try {
        const response = await axios.post(
          'https://marvel-api-production.up.railway.app/api/comics/getComic',
          {
            id: id,
          }
        );
        const data = response.data.data[0];
        setComic(data);
      } catch (error) {
        console.error(error);
        // Manejo de errores
      }
    };

    fetchComic();
  }, []);

  if (!comic) {
    return <div>Cargando...</div>;
  }
  
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
  return (
    <div>
      <Header title="Detalles del cómic" />
      <ComicContent comic={comic} />
      <FavoritesButton  addToFavorites={addToFavorites} isFavorite={isFavorite} />
    </div>
  );
}

export default ComicDetails;