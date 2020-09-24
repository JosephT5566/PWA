import React from 'react';

import './styles.scss';

export default function Menu({ items = [] }) {
    return (
        <nav id="menu">
            <ul>
                {items.map(({ label = '', onClick = null }, index) => {
                    return (
                        <li key={index}>
                            <button onClick={onClick}>{label}</button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
