import React from 'react';
import Typography from '@material-ui/core/Typography';

import './styles.scss';

export default function Title({ title }) {
    return (
        <div className="title">
            <Typography className="label" variant="h4">{title}</Typography>
        </div>
    );
}
