import NavBar from "../components/NavBar";
import Header from "../components/ScorePage/Header";

import '../styles/ScorePage.css'
import CVScorage from "../components/ScorePage/CVScorage";
import AnalyseDetaile from "../components/ScorePage/AnalyseDetaile";
import PointsFortsFaibles from "../components/ScorePage/PointsFortsFaibles";


const ScorePage : React.FC = () => {
    return (
        <div className="score-page">
            <NavBar/>
            <Header/>
            <CVScorage/>
            <div className="cv-bg">
            </div>
            <AnalyseDetaile/>
            <PointsFortsFaibles/>

        </div>
    )
}

export default ScorePage