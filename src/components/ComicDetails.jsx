import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importar archivo CSS personalizado
import "./styles.css";
import { Link } from 'react-router-dom';
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
          `${"https://marvel-api-production.up.railway.app/api/comics/getComic"}`,
          {
            "id": id 
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
      <header>
        <img src="https://wallpapercave.com/wp/wp2700223.jpg" width="600" height="200" alt="Comic Webpage Logo" />
        <h1>Registrate</h1>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/appMain">Comics</Link></li>
            <li><Link to="/AboutUs">Nosotros</Link></li>
            <li><Link to="/Perfil">Perfil</Link></li>
          </ul>
        </nav>
      </header>
      <div className="comic-details-container"> {/* Agregar clase CSS al contenedor */}
        <img src={comic.image} alt={comic.title} style={{ width: '20%' }} /> {/* Ajustar imagen */}
        <div className="comic-details-content"> {/* Agregar clase CSS al contenido */}
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
      </div>
    </div>
  );
}

export default ComicDetails;