import React from 'react';

interface ImprovementSuggestionsProps {
    suggestions: string[];
}

const ImprovementSuggestions: React.FC<ImprovementSuggestionsProps> = ({ suggestions }) => {
    return (
        <div className="improvement-suggestions">
            <h3>Points d'amélioration :</h3>
            <ul>
                {suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                ))}
            </ul>
        </div>
    );
};

export default ImprovementSuggestions;
