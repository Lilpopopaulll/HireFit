import NavBar from "../components/NavBar";
import '../styles/accueil.css'
import HireFitBanner from "../components/HireFitBanner";
import FileUpload from "../components/FileUpload";


const Accueil : React.FC = () => {
    return (
        <>
            <div className="accueil">
                <div className="landing-page-container">
                    <NavBar></NavBar>
                    <div className="accroche">
                        <h1 className="slogan">TRANSFORMEZ VOTRE CV, TRANSFORMEZ VOTRE AVENIR.</h1>
                    </div>
                    <button className="button-start">Get Started</button>
                </div>
            </div>
            <FileUpload/>
        </>


    )
}

export default Accueil