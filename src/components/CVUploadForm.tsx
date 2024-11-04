/* eslint-disable @typescript-eslint/no-unused-vars */


import React, { useState } from 'react';
import '../styles/upload.css'
import {useNavigate} from "react-router-dom";

const CVUploadForm: React.FC = () => {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [file, setFile] = useState<File | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logique d'envoi des données
    };

    const navigate = useNavigate();

    const handleAnalyzeClick = (): void => {
        navigate("/score");
    };


    return (
        <form className="cv-upload-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Votre nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Poste recherché"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
            />
            <input
                type="file"
                onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
                required
            />
            <button type="submit" onClick={handleAnalyzeClick}>Analyser mon CV</button>
        </form>
    );
};

export default CVUploadForm;
