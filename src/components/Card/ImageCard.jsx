import React from 'react';

import './imageCard.scss';

export default function ImageCard({ className, label, image = null, onClick }) {
    const renderImage = () => {
        if (image) {
            return <div className="image" style={{ backgroundImage: `url(${image})` }} />;
        }
    };
    return (
        <button id="imageCard" className={className} onClick={onClick}>
            <h2>{label}</h2>
            {renderImage()}
        </button>
    );
}
