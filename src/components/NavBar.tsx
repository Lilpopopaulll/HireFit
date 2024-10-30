import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const NavBar: React.FC = () => {
    // State pour suivre si l'utilisateur a défilé au-delà de 100vh
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // Fonction pour gérer le défilement
        const handleScroll = () => {
            if (window.scrollY > 0.8*window.innerHeight) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Ajouter un écouteur de défilement
        window.addEventListener('scroll', handleScroll);

        // Nettoyage : retirer l'écouteur lors du démontage du composant
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`nav-bar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="bar"></div>
            <div className="nav-bar-container">
                <h3 className="nav-bar-title">HIREFIT</h3>
                <div className="nav-bar-menu">
                    <div><Link className="nav-bar-items" to="/home">Menu</Link></div>
                    <div><Link className="nav-bar-items" to="/home">Photos</Link></div>
                    <div><Link className="nav-bar-items" to="/home">Evènements</Link></div>
                    <div><Link className="nav-bar-items" to="/home">Accès/Contact</Link></div>
                </div>
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
}

export default NavBar;