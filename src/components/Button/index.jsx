import React from 'react';

import './styles.scss';

export default function Button({ label, onClick }) {
    return(
        <button id="custom-button" onClick={onClick}>
            {label}
        </button>
    )
}
