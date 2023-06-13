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
        let response = await axios.post(
          'https://marvel-api-production.up.railway.app/api/comics/getComic',
          {
            id: id,
          }
        );
        response = response.data.data[0];
        setComic(response);
      } catch (error) {
        if (error.response.status === 404) {
          setModalMessage('Comic no encontrado');
          setModalIsOpen(true);
          //esperar 5 segundos
          setTimeout(() => {
            //redireccionar a login
            window.location.href = '/ AppMain';
          }, 5000);
        } else {
          setModalMessage('Error del servidor');
          setModalIsOpen(true);
        }
      }

      try {
        if (!localStorage.getItem('token')) {
          setIsFavorite(false);
          return;
        }

        let response = await axios.post(
          'https://marvel-api-production.up.railway.app/api/comics/isFavorite',
          {
            comicId: id,
            token: localStorage.getItem('token'),
          }
        );
        setIsFavorite(response.data.data[0].isFavorite);
      } catch (error) {
        if (error.response === undefined) {
          setModalMessage('Error del servidor');
        } else if (error.response.status === 401) {
          setModalMessage(
            'No se pudo verificar si el comic está en favoritos, inicia sesión'
          );
          setModalIsOpen(true);
          //esperar 5 segundos
          setTimeout(() => {
            //redireccionar a login
            window.location.href = '/login';
          }, 5000);
        } else if (error.response.status === 404) {
          setModalMessage('Comic no encontrado');
        } else {
          setModalMessage('Error del servidor');
        }
        setIsFavorite(false);
        setModalIsOpen(true);
      }
    };

    fetchComic();
  }, []);

  if (!comic) {
    return <div>Cargando...</div>;
  }

  const addToFavorites = async () => {
    try {
      const response = await axios.post(
        'https://marvel-api-production.up.railway.app/api/comics/favorite',
        {
          comicId: comic.id,
          token: localStorage.getItem('token'),
          // Otros datos que necesites enviar al backend
        }
      );

      if (response!==undefined ) {
        setModalMessage('Comic agregado a favoritos');
        setModalIsOpen(true);
        setIsFavorite(true);
      }

    } catch (error) {
      if (error.response.status === 401) {
        setModalMessage('Error de autenticación, inicia sesión nuevamente');
        setModalIsOpen(true);
        setTimeout(() => {
          //redireccionar a login
          window.location.href = '/login';
        }, 5000);
      } else if (error.response.status === 404) {
        setModalMessage('Comic no encontrado');
      } else if (error.response.status === 400) {
        setModalMessage('El comic ya está en favoritos');
      } else {
        setModalMessage('Error del servidor');
      }
      setModalIsOpen(true);
    }
  };

  const removeFromFavorites = async () => {
    try {
      const request = {
        comicId: comic.id,
        token: localStorage.getItem('token'),
      };
      const response = await axios.post(
        'https://marvel-api-production.up.railway.app/api/comics/DeleteFavorite',
        request
      );
      if (response!==undefined ) {
        setModalMessage('Comic eliminado de favoritos');
        setModalIsOpen(true);
        setIsFavorite(false);
      }
    } catch (error) {
      if (error.response.status === 401) {
        setModalMessage('Error de autenticación, inicia sesión nuevamente');
        setModalIsOpen(true);
        setTimeout(() => {
          //redireccionar a login
          window.location.href = '/login';
        }, 5000);
      } else if (error.response.status === 404) {
        setModalMessage('Comic no encontrado');
      } else if (error.response.status === 400) {
        setModalMessage('El comic no está en favoritos');
      } else {
        setModalMessage('Error del servidor');
      }
      setModalIsOpen(true);
    }
  };

  return (
    <div>
      <Header title="Detalles del cómic" />
      <ComicContent
        comic={comic}
        addToFavorites={addToFavorites}
        isFavorite={isFavorite}
        removeFromFavorites={removeFromFavorites}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="custom-modal"
      >
        <div>{modalMessage}</div>
        <button onClick={() => setModalIsOpen(false)}>Cerrar</button>
      </Modal>
    </div>
  );
}

export default ComicDetails;