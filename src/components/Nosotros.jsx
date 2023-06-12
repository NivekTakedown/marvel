import React from 'react';
import './styles.css';
import Header from '../page/header/index.jsx';

function AboutUs() {
  return (
    <div>
      <Header title="Acerca de nosotros"/>
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

export default AboutUs ;