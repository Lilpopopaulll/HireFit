import {useState} from "react";

const CVScorage : React.FC = () => {

        const [score, setScore] = useState(85);
  return (
      <div className="cv-scorage">
          <div className="cv-container">

          </div>
          <div className="score">{score} <small className="pourcentage">/100</small></div>
          <button className="button-amélioration">Améliorer mon CV</button>
      </div>
  )
}

export default CVScorage