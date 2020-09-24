import React from 'react';

import './styles.scss';

export default function Title({ title }) {
    return (
        <div className="title">
            <h1 className="label">{title}</h1>
        </div>
    );
}
