import React, { useContext } from 'react';
import CurrentIndexContext from './Context';

export default function Button({ index, onClick = null, children }) {
    const currentIndexContext = useContext(CurrentIndexContext);
    const active = index === currentIndexContext.currentIndex ? 'active' : '';
    return (
        <button
            className={`${active}`}
            onClick={() => {
                currentIndexContext.onIndexChange(index);
                if (onClick) onClick();
            }}
        >
            {children}
        </button>
    );
}
