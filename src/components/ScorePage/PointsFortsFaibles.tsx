import React, { useState } from "react";

const PointsFortsFaibles: React.FC = () => {
    const [pointsForts] = useState([
        { id: 1, label: "Bonne communication" },
        { id: 2, label: "Travail d'équipe" },
        { id: 3, label: "Résolution de problèmes" },
    ]);

    const [pointsFaibles] = useState([
        { id: 1, label: "Gestion du stress" },
        { id: 2, label: "Délai de livraison" },
        { id: 3, label: "Précision" },
    ]);

    return (
        <div className="points-container">
            {/* Colonne des points faibles */}
            <div className="points-column points-faibles">
                <h3>Points Faibles</h3>
                <ul>
                    {pointsFaibles.map((point) => (
                        <li key={point.id}>{point.label}</li>
                    ))}
                </ul>
            </div>

            {/* Colonne des points forts */}
            <div className="points-column points-forts">
                <h3>Points Forts</h3>
                <ul>
                    {pointsForts.map((point) => (
                        <li key={point.id}>{point.label}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PointsFortsFaibles;
