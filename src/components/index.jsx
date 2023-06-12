import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles.css";

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
        <p>{`Comic ID: ${id}`}</p>
      </div>
    </Link>

  );
}


function Comics({ comics }) {
  return (
    <section className="comics">
      {comics.map((comic) => (
        <Comic key={comic.id} {...comic} />
      ))}
    </section>
  );
}

function AppMain() {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const response = await axios.get("https://marvel-api-production.up.railway.app/api/comics");
        const data = response.data.data;
        setComics(data);
      } catch (error) {
        console.error(error);
        // Manejo de errores
      }
    };

    fetchComics();
  }, []);

  return (
    <div>
      <header>
        <img
          src="https://wallpapercave.com/wp/wp2700223.jpg"
          width="600"
          height="200"
          alt="Comic Webpage Logo"
        />
        <h1>Marvel Comics</h1>
        <nav>
          <ul>
            <li>
              <a href="">Inicio</a>
            </li>
            <li>
              <a href="/appMain">Comics</a>
            </li>
            <li>
              <a href="/AboutUs">Nosotros</a>
            </li>
            <li>
                <a href="/Perfil">Perfil</a>
             </li>  
          </ul>
        </nav>
      </header>
      <Comics comics={comics} />
      <section className="contact">
        <h2>Get in Touch</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
          <input type="submit" value="Send Message" />
        </form>
      </section>
      <footer>
        <p>&copy; 2023 Comic Webpage. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AppMain;
