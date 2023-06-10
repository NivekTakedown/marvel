import React from "react";
import "./styles.css";

function Comic({ id, title, image }) {
  return (
    <div className="comic">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{`Comic ID: ${id}`}</p>
    </div>
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

function App() {
  const comics = {
    status: 0,
    data: [
      {
        id: 82967,
        title: "Marvel Previews (2017)",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
      },
      {
        id: 82965,
        title: "Marvel Previews (2017)",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
      },
      {
        id: 82970,
        title: "Marvel Previews (2017)",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada.jpg",
      },
      {
        id: 1308,
        title: "Marvel Age Spider-Man Vol. 2: Everyday Hero (Digest)",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/9/20/4bc665483c3aa.jpg",
      },
      {
        id: 1003,
        title: "Sentry, the (Trade Paperback)",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/f/c0/4bc66d78f1bee.jpg",
      },
      {
        id: 331,
        title: "Gun Theory (2003) #4",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bc69f11baf75.jpg",
      },
      {
        id: 428,
        title: "Ant-Man (2003) #4",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/4/20/4bc697c680890.jpg",
      },
      {
        id: 291,
        title: "Ant-Man (2003) #1",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/6/e0/4bc6a2497684e.jpg",
      },
      {
        id: 376,
        title: "Ant-Man (2003) #3",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/d/70/4bc69c7e9b9d7.jpg",
      },
      {
        id: 1749,
        title: "Official Handbook of the Marvel Universe (2004) #11 (X-MEN - AGE OF APOCALYPSE)",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/c/b0/4bc6494ed6eb4.jpg",
      },
      {
        id: 1158,
        title: "ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB (Trade Paperback)",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/2/f0/4bc6670c80007.jpg",
      },
      {
        id: 1332,
        title: "X-Men: Days of Future Past (Trade Paperback)",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239.jpg",
      },
      {
        id: 1220,
        title: "Amazing Spider-Man 500 Covers Slipcase - Book II (Trade Paperback)",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
      },
      {
        id: 3627,
        title: "Storm (2006)",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7.jpg",
      },
      {
        id: 384,
        title: "Gun Theory (2003) #3",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bc69f11baf75.jpg",
      },
      {
        id: 1590,
        title: "Official Handbook of the Marvel Universe (2004) #9 (THE WOMEN OF MARVEL)",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/9/b0/4c7d666c0e58a.jpg",
      },
      {
        id: 183,
        title: "Startling Stories: The Incorrigible Hulk (2004) #1",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
      },
      {
        id: 1994,
        title: "Official Handbook of the Marvel Universe (2004) #13 (TEAMS)",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/f/20/4bc63a47b8dcb.jpg",
      },
      {
        id: 1689,
        title: "Official Handbook of the Marvel Universe (2004) #10 (MARVEL KNIGHTS)",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/9/30/4bc64df4105b9.jpg",
      },
      {
        id: 323,
        title: "Ant-Man (2003) #2",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/f/20/4bc69f33cafc0.jpg",
      },
    ],
    warnings: [],
    info: "Listado de comics obtenido exitosamente.",
  };

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
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Comics</a>
            </li>
            <li>
              <a href="#">Nosotros</a>
            </li>
          </ul>
        </nav>
      </header>
      <Comics comics={comics.data} />
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

export default App;