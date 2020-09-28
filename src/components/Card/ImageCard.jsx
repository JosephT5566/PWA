import React from 'react';

import './imageCard.scss';

export default function ImageCard({ label, image = null, onClick }) {
    const renderImage = () => {
        if (image) {
            return <div style={{ backgroundImage: `url(${image})` }} />;
        }
    };
    return (
        <button id="imageCard" onClick={onClick}>
            {label}
            {renderImage()}
        </button>
    );
}
