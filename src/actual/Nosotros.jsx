import React from 'react';
import './styles.css';

function AboutUs() {
  return (
    <div>
      <header>
        <img src="https://wallpapercave.com/wp/wp2700223.jpg" width="600" height="200" alt="Comic Webpage Logo" />
        <h1>Conoce más</h1>
        <nav>
          <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="Comics.html">Comics</a></li>
            <li><a href="Nosotros.html">Nosotros</a></li>
          </ul>
        </nav>
      </header>

      <div className="container">
        <section className="about">
          <h2>About Us</h2>
          <p>Bienvenidos a Marvel Fanpage, el destino definitivo para los aficionados al cómic. Nuestro sitio web está dedicado a traerte las últimas noticias, reseñas y actualizaciones del mundo del cómic.</p>
          <p>En Marvel Fanpage, creemos en el poder de contar historias y en el arte del cómic. Nos esforzamos por ofrecer una plataforma donde los entusiastas del cómic puedan reunirse para explorar sus personajes, series y editoriales favoritas.</p>
          <p>Tanto si eres un fan incondicional como si eres nuevo en el mundo del cómic, te tenemos cubierto. Nuestro equipo de apasionados escritores y editores curan contenido que cubre una amplia gama de temas, incluyendo reseñas de cómics, perfiles de personajes, noticias de la industria, y mucho más.</p>
          <p>Toma parte en nuestra vibrante comunidad de cómics. Únete a nuestra vibrante comunidad y mantente al día de los últimos acontecimientos del universo del cómic. Participa en debates, comparte tus cómics favoritos y descubre joyas ocultas.</p>
          <p>Gracias por formar parte de la comunidad Marvel Fanpage. Juntos, celebremos el arte y la magia narrativa del cómic.</p>
        </section>
      </div>

      <footer>
        <p>&copy; 2023 Comic Webpage. All rights reserved.</p>
      </footer>
    </div>
  );
}