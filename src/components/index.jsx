import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../page/header/index.jsx";

function Comic({ id, title, image, maxWidth, maxHeight }) {
  const handleClick = () => {
    localStorage.setItem("id", id);
    window.location.href = "/comic/Details";
  };

  const comicStyle = {
    width: "300px",
    height: "200px",
    border: "1px solid #ccc",
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    minWidth: `${maxWidth}px`,
    minHeight: `${maxHeight}px`,
  };

  return (
    <Link to={``} onClick={handleClick} className="comic-link">
      <div style={comicStyle} className="comic">
        <div className="comic-image-container">
          <img src={image} alt={title} style={imageStyle} className="comic-image" />
        </div>
        <div className="comic-details">
          <h2>{title}</h2>
          <p>{`Comic ID: ${id}`}</p>
        </div>
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


