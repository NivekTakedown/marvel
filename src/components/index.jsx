import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles.css";
import Header from "../page/header/index.jsx";

function Comic({ id, title, image, maxWidth, maxHeight }) {
  const handleClick = () => {
    localStorage.setItem("id", id);
    window.location.href = "/comic/Details";
  };

  const style = {
    width: "auto",
    height: "auto",
    maxWidth: maxWidth,
    maxHeight: maxHeight,
  };

  return (
    <Link to={``} onClick={handleClick} className="comic-link">
      <div className="comic">
        <div className="comic-image-container" style={style}>
          <img src={image} alt={title} className="comic-image" />
        </div>
        <h2>{title}</h2>
        <p>{`Comic ID: ${id}`}</p>
      </div>
    </Link>
  );
}

function Comics({ comics }) {
  const [maxWidth, setMaxWidth] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    let maxW = 0;
    let maxH = 0;

    comics.forEach((comic) => {
      const img = new Image();
      img.src = comic.image;
      img.onload = () => {
        maxW = Math.max(maxW, img.width);
        maxH = Math.max(maxH, img.height);

        setMaxWidth(maxW);
        setMaxHeight(maxH);
      };
    });
  }, [comics]);

  return (
    <section className="comics">
      {comics.map((comic) => (
        <Comic
          key={comic.id}
          {...comic}
          maxWidth={maxWidth}
          maxHeight={maxHeight}
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
        const response = await axios.get(
          "https://marvel-api-production.up.railway.app/api/comics"
        );
        const data = response.data.data;
        setComics(data);
      } catch (error) {
        console.error(error);
        // Error handling
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
