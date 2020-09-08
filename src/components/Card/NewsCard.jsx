import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    card: {
        width: '100%',
        minWidth: 320,
        position: 'relative',
        boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)',
        overflow: 'visible',
        borderRadius: '1.5rem',
        transition: '0.4s',
        '&:before': {
            content: '""',
            position: 'absolute',
            zIndex: 0,
            display: 'block',
            width: '100%',
            bottom: -1,
            height: '100%',
            borderRadius: '1.5rem',
            backgroundColor: 'rgba(0,0,0,0.08)',
        },
    },
    main: {
        overflow: 'hidden',
        borderTopLeftRadius: '1.5rem',
        borderTopRightRadius: '1.5rem',
        zIndex: 1,
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
        minHeight: '100%',
    },
    avatar: {
        marginRight: '1rem',
        width: 48,
        height: 48,
    },
    tags: {
        display: 'inline-flex',
        marginBottom: '0.5rem',
    },
    tag: {
        marginRight: '0.5rem',
        backgroundColor: '#ff5dac',
        borderRadius: '0.5rem',
        padding: '2px 0.5rem',
        color: '#fff',
    },
    title: {
        fontSize: '2rem',
        color: '#fff',
    },
    author: {
        zIndex: 1,
        position: 'relative',
        display: 'flex',
        padding: '1rem',
        borderBottomLeftRadius: '1.5rem',
        borderBottomRightRadius: '1.5rem',
        backgroundColor: 'white',
    },
    authorName: {
        fontWeight: 500,
    },
}));

export default function NewsCard({ title, image, avatar, author, date, tags }) {
    const classes = useStyles();

    const renderTags = (tags) => {
        return tags.map((tag) => <div className={classes.tag}>{tag}</div>);
    };

    return (
        <Card className={classes.card}>
            <Box className={classes.main} minHeight={300} position={'relative'}>
                <CardMedia className={classes.contentImage} component="img" image={image} />
                <div className={classes.content}>
                    <div className={classes.tags}>{renderTags(tags)}</div>
                    <Typography variant={'h2'} className={classes.title}>
                        {title}
                    </Typography>
                </div>
            </Box>
            <Box className={classes.author}>
                <div>
                    <Avatar className={classes.avatar} src={avatar} />
                </div>
                <div>
                    <Typography variant={'h6'} className={classes.authorName}>
                        {author}
                    </Typography>
                    <Typography variant={'subtitle1'}>{date}</Typography>
                </div>
            </Box>
        </Card>
    );
}
