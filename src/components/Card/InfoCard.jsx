import React from 'react';
import Color from 'color';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(() => ({
    card: ({ color }) => ({
        width: '100%',
        borderRadius: 16,
        boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)',
        // '&:hover': {
        //     boxShadow: `0 6px 12px 0 ${Color(color).rotate(-12).darken(0.2).fade(0.5)}`,
        // },
    }),
    actionArea: {
        borderRadius: 16,
        transition: '0.2s',
    },
    media: {
        height: 200,
    },
    content: ({ color }) => {
        return {
            backgroundColor: color,
            padding: '1rem 1.5rem 1.5rem',
        };
    },
    title: {
        fontSize: '2rem',
        color: '#fff',
        textTransform: 'uppercase',
    },
    subtitle: {
        color: '#fff',
        opacity: 0.87,
        marginTop: '2rem',
    },
}));

export default function InfoCard({ title, subtitle, image, color = '#203f52' }) {
    const classes = useStyles({ color });
    return (
        <Card className={classes.card}>
            <CardActionArea className={classes.actionArea}>
                <CardMedia className={classes.media} image={image} />
                <CardContent className={classes.content}>
                    <Typography className={classes.title} variant={'h2'}>
                        {title}
                    </Typography>
                    <Typography className={classes.subtitle} variant={'subtitle'}>
                        {subtitle}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
