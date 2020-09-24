import React from 'react';
import { useNavigation } from 'react-navi';

import './styles.scss';

export default function Menu({ items = [] }) {
    const navigation = useNavigation();
    const currentURL = navigation.getCurrentValue().url.pathname;

    return (
        <nav id="menu">
            <ul>
                {items.map(({ label = '', tab }, index) => {
                    return (
                        <li key={index}>
                            <a
                                onClick={() => {
                                    if (tab) {
                                        navigation.navigate(`${currentURL}/${tab}`);
                                    }
                                }}
                            >
                                {label}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
