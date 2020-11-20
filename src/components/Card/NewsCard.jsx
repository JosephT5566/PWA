import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

import './newsCard.scss';

const useStyles = makeStyles(() => ({
    card: {
        width: '100%',
        position: 'relative',
        boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)',
        overflow: 'visible',
        borderRadius: '1.5rem',
    },
    actionArea: {
        height: '100%',
        borderRadius: '1.5rem',
    },
    main: {
        overflow: 'hidden',
        borderTopLeftRadius: '1.5rem',
        borderTopRightRadius: '1.5rem',
        '&:after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            display: 'block',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0))',
        },
    },
    content: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        zIndex: 1,
        padding: '1.5rem 1.5rem 1rem',
    },
    contentImage: {
        position: 'absolute',
        // minHeight: '100%',
        width: '100%',
    },
    author: {
        position: 'relative',
        display: 'flex',
        padding: '1rem',
        borderBottomLeftRadius: '1.5rem',
        borderBottomRightRadius: '1.5rem',
        backgroundColor: 'white',
    },
}));

export default function NewsCard({ title, image, description, domain }) {
    const classes = useStyles();

    return (
        <Card id="newsCard" className={classes.card}>
            <CardActionArea className={classes.actionArea}>
                <Box className={classes.main} minHeight={300} position={'relative'}>
                    <CardMedia className={classes.contentImage} component="img" image={image} />
                    <div className={classes.content}>
                        <h2>{title}</h2>
                    </div>
                </Box>
                <Box className={classes.author}>
                    <div>
                        <h3>{description}</h3>
                        <h6>{domain}</h6>
                    </div>
                </Box>
            </CardActionArea>
        </Card>
    );
}
