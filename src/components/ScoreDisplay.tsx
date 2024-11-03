import React from 'react';

interface ScoreDisplayProps {
    score: number;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ score }) => {
    return (
        <div className="score-display">
            <h2>Note de votre CV : {score} / 100</h2>
        </div>
    );
};

export default ScoreDisplay;
