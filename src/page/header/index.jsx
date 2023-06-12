//header component
import React from 'react';

import '../../components/styles.css';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header>
            <img
                src="https://wallpapercave.com/wp/wp2700223.jpg"
                width="600"
                height="200"
                alt="Comic Webpage Logo"
            />
            <h1>{props.title}</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/AppMain">Comics</Link>
                    </li>
                    <li>
                        <Link to="/AboutUs">Nosotros</Link>
                    </li>
                    <li>
                        <Link to="/Perfil">Perfil</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
