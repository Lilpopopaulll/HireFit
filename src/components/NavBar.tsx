import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="nav-bar">
            <div className="bar"></div>
            <div className="nav-bar-container">
                <h2 className="nav-bar-title">HIREFIT</h2>

                {/* Bouton pour le menu mobile */}
                <button className="nav-bar-toggle" onClick={toggleMenu}>
                    ☰
                </button>

                {/* Menu de navigation */}
                <div className={`nav-bar-menu ${isOpen ? "open" : ""}`}>
                    <div><Link className="nav-bar-items" to="/home">Menu</Link></div>
                    <div><Link className="nav-bar-items" to="/home">Photos</Link></div>
                    <div><Link className="nav-bar-items" to="/home">Evènements</Link></div>
                    <div><Link className="nav-bar-items" to="/home">Accès/Contact</Link></div>
                </div>

                {/* Boutons et options de langue */}
                <div className="nav-bar-buttons">
                    <button className="nav-bar-reservation">S'INSCRIRE</button>
                    <select id="langage">
                        <option>FR</option>
                        <option>EN</option>
                        <option>ES</option>
                    </select>
                </div>
            </div>
            <div className="bar"></div>
        </div>
    );
};

export default NavBar;
