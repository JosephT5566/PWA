import React from 'react';

import './videoCard.scss';

export default function VideoCard({ src }) {
    return (
        <div id="videoCard">
            <div className="video">
                <div className="iframe">
                    <iframe width="100%" height="100%" src={src} frameBorder="0" allowFullScreen />
                </div>
            </div>
        </div>
    );
}
