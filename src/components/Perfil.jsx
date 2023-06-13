import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import { Link } from 'react-router-dom';
import Header from '../page/header';
 // Supongo que tienes un componente llamado Comics para mostrar la lista de cómics

 function Comic({ id, title, image }) {
  const handleClick = () => {
    localStorage.setItem('id', id);
    window.location.href = '/comic/Details';
  };

  return (
    <Link to={``} onClick={handleClick} className="comic-link">
      <div className="comic">
        <img src={image} alt={title} />
        <h2>{title}</h2>
      </div>
    </Link>
  );
}

function Comics({ comics }) {
  const [squareSize, setSquareSize] = useState(0);

  useEffect(() => {
    const maxSideLength = Math.max(...comics.map(comic => comic.image.width));
    setSquareSize(maxSideLength);
  }, [comics]);

  return (
    <section className="comics">
      {comics.map((comic) => (
        <Comic
          key={comic.id}
          {...comic}
          style={{
            width: squareSize * 0.05,
            height: squareSize * 0.1,
          }}
        />
      ))}
    </section>
  );
}


function Perfil() {
  const [comics, setFavoriteComics] = useState([]);

  useEffect(() => {
  const handleFetchFavoriteComics = async () => {
    try {
      const response = await axios.post('https://marvel-api-production.up.railway.app/api/comics/favorites', {
        token: localStorage.getItem('token'),
      });
      const data = response.data.data;
      setFavoriteComics(data);
    } catch (error) {
      console.error(error); // Manejo de errores
    }
  };
  handleFetchFavoriteComics();
}, []);

  const handleLogout = async () => {
    try {
      const response = await axios.post('https://marvel-api-production.up.railway.app/api/user/logout', {
        token: localStorage.getItem('token'),
      });
      if (response.status === 200) {
      console.log(response.data);
      localStorage.removeItem('token');
      window.location.href = '/';

    }} catch (error) {
      console.error(error); // Manejo de errores
    }
  };

  return (
    <div>
      <Header title="Favoritos"/>
      <body id="hey">
        <h2 style={{ textAlign: 'center', color: 'white' }}>User Profile Card</h2>
        <div className="container">
          <div className="card">
            <img src="https://eloutput.com/wp-content/uploads/2022/01/capitan-america-1024x536.jpg.webp" alt="John" className="profile-image" />
            <h1>User Name</h1>
            <p className="title">Options</p>
            <p><Link to="/DeleteUser">
            <button>Borrar usuario </button>
            </Link></p>
            <p><button onClick={handleLogout}>Cerrar sesión</button></p>
            <div className="favorite-comics">
              <h2>Tus cómics favoritos:</h2>
              <Comics comics={comics} />
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Perfil;
