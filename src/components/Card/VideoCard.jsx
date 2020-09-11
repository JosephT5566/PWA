import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles(() => ({
    card: {
        width: '100%',
        paddingBottom: '56.25%',
        boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)',
        borderRadius: '1.5rem',
        overflow: 'hidden',
        position: 'relative',
    },
    image: {
        position: 'absolute',
        top: 0,
    },
}));

export default function ImageCard({ src }) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <iframe className={classes.image} width="100%" height="100%" title=" " src={src} frameBorder="0" allowFullScreen />
        </Card>
    );
}
