// HirefitBanner.tsx
import React, { useEffect, useState } from 'react';
import '../styles/hirefitbanner.css';

const HirefitBanner: React.FC = () => {
    const [numSpans, setNumSpans] = useState<number>(0);

    const updateSpans = () => {
        const width = window.innerWidth;

        if (width < 600) {
            setNumSpans(10); // Affiche 2 spans pour les petits écrans
        } else if (width < 1200) {
            setNumSpans(20); // Affiche 4 spans pour les écrans moyens
        } else {
            setNumSpans(25); // Affiche 10 spans pour les grands écrans
        }
    };

    useEffect(() => {
        updateSpans(); // Met à jour les spans au chargement du composant
        window.addEventListener('resize', updateSpans); // Met à jour les spans lors du redimensionnement

        return () => {
            window.removeEventListener('resize', updateSpans); // Nettoyage de l'événement
        };
    }, []);

    return (
        <div className="banner">
            <div className="banner-content">
                {Array.from({ length: numSpans }, (_, i) => (
                    <>
                        <span key={i}>HIREFIT</span>
                        <span key={i}>.</span>
                    </>
                ))}
            </div>
        </div>
    );
};

export default HirefitBanner;
