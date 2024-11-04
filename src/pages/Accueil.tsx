import React from "react";
import NavBar from "../components/NavBar";
import '../styles/accueil.css';
import CVUploadForm from "../components/CVUploadForm";

const Accueil: React.FC = () => {





    const scrollToCVUploadForm = (): void => {
        const section = document.getElementById('cv-upload-form-section');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="accueil">
                <div className="landing-page-container">
                    <div className="nav-bar-container-landing">
                        <NavBar />
                    </div>
                    <div className="accroche">
                        <h1 className="slogan">Transformez votre cv, transformez votre avenir.</h1>
                    </div>
                    <button
                        className="button-start"
                        onClick={scrollToCVUploadForm}
                    >
                        Get Started
                    </button>
                </div>
                <div id="cv-upload-form-section">
                    <CVUploadForm />
                </div>
            </div>
        </>
    );
};

export default Accueil;
