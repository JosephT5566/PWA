import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    card: {
        width: '100%',
        height: '100%',
        boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)',
        borderRadius: '1.5rem',
        overflow: 'visible',
    },
    actionArea: {
        height: '100%',
        borderRadius: '1.5rem',
    },
    box: {
        height: '100%',
        overflow: 'hidden',
        borderRadius: '1.5rem',
        '&:after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            display: 'block',
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.2)',
        },
    },
    media: {
        height: '100%',
    },
    content: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        width: '100%',
        height: '100%',
    },
    title: {
        color: '#fff',
        zIndex: 1,
        fontSize: '2rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
        },
    },
}));

export default function ImageCard({ title, image }) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea className={classes.actionArea}>
                <Box className={classes.box} position={'relative'}>
                    <CardMedia className={classes.media} component="img" image={image} />
                    <div className={classes.content}>
                        <Typography variant={'h2'} align="center" className={classes.title}>
                            {title}
                        </Typography>
                    </div>
                </Box>
            </CardActionArea>
        </Card>
    );
}
