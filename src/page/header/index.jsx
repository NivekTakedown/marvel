//header component
import React from 'react';

import '../../components/styles.css';
import { Link } from 'react-router-dom';

function Header(props) {
    const token = localStorage.getItem('token');
    let navLinks = [];
    let bool=(token==null);
    if(bool){
        navLinks = [
            { to: '/', text: 'Inicio' },
            { to: '/AppMain', text: 'Comics' },
            { to: '/AboutUs', text: 'Nosotros' }
        ];
    }
    else{
        navLinks = [
            { to: '/', text: 'Inicio' },
            { to: '/AppMain', text: 'Comics' },
            { to: '/AboutUs', text: 'Nosotros' },
            { to: '/Perfil', text: 'Perfil' }
        ];
    }
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
                {navLinks
                .map((link) => (
                    <li key={link.to}>
                    <Link to={link.to} className="nav-link">
                        {link.text}
                    </Link>
                    </li>
                ))}
            </ul>
            </nav>
        </header>
        );
}

export default Header;
