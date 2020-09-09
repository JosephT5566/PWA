import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
    card: ({ color }) => ({
        width: '100%',
        borderRadius: '1.5rem',
        boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)',
        // '&:hover': {
        //     boxShadow: `0 6px 12px 0 ${Color(color).rotate(-12).darken(0.2).fade(0.5)}`,
        // },
    }),
    actionArea: {
        borderRadius: '1.5rem',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    },
    media: {
        height: 200,
        [theme.breakpoints.up('sm')]: {
            flex: '1 0',
        },
    },
    content: ({ color }) => {
        return {
            backgroundColor: color,
            padding: '1rem 1.5rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            [theme.breakpoints.up('sm')]: {
                flex: '1 0',
                height: 200,
            },
            [theme.breakpoints.up('md')]: {
                flex: '2 0',
            },
        };
    },
    title: {
        fontSize: '2rem',
        color: '#fff',
        textTransform: 'uppercase',
        marginBottom: '1rem',
    },
    subtitle: {
        color: '#fff',
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
