import React, { useState } from "react";


interface BlockProps {
    title: string;
    note: string; // Add note as a prop
    bg : string;
}

const Block: React.FC<BlockProps> = ({ title, note, bg }) => {
    return (
        <div className="analyse-block" style={{backgroundColor : bg }}>
            <h3>{title}</h3>
            <p>{note}</p> {/* Display the note */}
        </div>
    );
};

const AnalyseDetaile: React.FC = () => {
    const [blocks, setBlocks] = useState<{ title: string; note: string; bg: string}[]>([
        { title: "Présentation et format", note: "8/10", bg: "rgba(20, 184, 255, 0.15)"},
        { title: "Experience professionnelle", note: "5/10", bg: "rgba(255,243,20,0.15)" },
        { title: "Experience professionnelle", note: "5/10", bg: "rgba(255,20,20,0.15)" },
        { title: "Experience professionnelle", note: "5/10", bg: "rgba(20,255,24,0.15)" },
        { title: "Experience professionnelle", note: "5/10", bg: "rgba(255,126,20,0.15)" },
        { title: "Experience professionnelle", note: "5/10", bg: "rgba(169,20,255,0.15)" }
    ]);

    return (
        <div className="analyse-detaillee">
            <h2 className="analyse-main-title">Analyse détaillée</h2>
            <div className="analyse-bar"></div>
            <div className="analyse">'
                {blocks.map((block, index) => (
                    <Block key={index} title={block.title} note={block.note} bg={block.bg} />
                    ))}
            </div>
        </div>
    );
};


export default AnalyseDetaile;
