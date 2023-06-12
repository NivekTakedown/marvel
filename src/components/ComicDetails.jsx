import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import Header from '../page/header/index.jsx';
import ComicContent from '../page/ComicContent/index.jsx';
import Modal from 'react-modal';
function ComicDetails() {
  const [comic, setComic] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
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
      
      setModalMessage('Comic agregado a favoritos');
      setModalIsOpen(true);
      setIsFavorite(true);
    } catch (error) {
        if (error.response.status === 401) {
          setModalMessage('Error de autenticación, inicia sesión nuevamente');
        }
        else if (error.response.status === 404) {
          setModalMessage('Comic no encontrado');
        }
        else if (error.response.status === 400) {
          setModalMessage('El comic ya está en favoritos');
        }
        else{
          setModalMessage('Error del servidor');
        }
      setModalIsOpen(true);
      // Manejo de errores
      // Manejo de errores
    }
  };
  return (
    <div>
      <Header title="Detalles del cómic" />
      <ComicContent comic={comic} addToFavorites={addToFavorites} isFavorite={isFavorite} />
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="custom-modal">
        <div>{modalMessage}</div>
        <button onClick={() => setModalIsOpen(false)}>Cerrar</button>
      </Modal>
    </div>
  );
}

export default ComicDetails;