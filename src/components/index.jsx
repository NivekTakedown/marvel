import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles.css";
import Header from "../page/header/index.jsx";

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
      <Header title="Marvel comics" />
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
