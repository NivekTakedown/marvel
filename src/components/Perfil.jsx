import React from 'react';
import './styles.css';

function Perfil() {
  return (
    <div>
      <header>
        <img src="https://wallpapercave.com/wp/wp2700223.jpg" width="600" height="200" alt="Comic Webpage Logo" />
        <h1>Marvel Comics</h1>
        <nav>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="comics.html">Comics</a></li>
            <li><a href="Nosotros.html">About</a></li>
            <li><a href="perfil.html">Perfil</a></li>
          </ul>
        </nav>
      </header>
      <body id="hey">
        <h2 style={{ textAlign: 'center', color: 'white' }}>User Profile Card</h2>
        <div className="container">
          <div className="card">
            <img src="https://media.vanityfair.com/photos/6478bc8dae3575a9d4843768/3:2/w_1998,h_1332,c_limit/Leonardo-DiCaprio-Europe.jpg" alt="John" className="profile-image" />
            <h1>Leonardo-DiCaprio</h1>
            <p className="title">CEO & Founder, Example</p>
            <p>Harvard University</p>
            <p><button>Borrar usuario</button></p>
            <p><button>Cerrar sesión</button></p>
            <p><button>Favoritos</button></p>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Perfil;