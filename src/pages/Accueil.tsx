import NavBar from "../components/NavBar";
import '../styles/accueil.css'
import HireFitBanner from "../components/HireFitBanner";
import CVUploadForm from "../components/CVUploadForm";


const Accueil : React.FC = () => {
    return (
        <>
            <div className="accueil">
                <div className="landing-page-container">
                    <NavBar></NavBar>
                    <div className="accroche">
                        <h1 className="slogan">Transformez votre votre cv, transformez votre avenir.</h1>
                    </div>
                    <button className="button-start">Get Started</button>
                </div>
            </div>

        </>


    )
}

export default Accueil