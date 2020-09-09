import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
    card: {
        width: '100%',
        paddingBottom: '56.25%',
        boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)',
        borderRadius: '1.5rem',
        overflow: 'hidden',
        position: 'relative',
    },
    image: {
        width: '100%',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0, // 水平垂直置中內容
    },
}));

export default function ImageCard({ title, video }) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <iframe
                className={classes.image}
                title="【呱吉】呱張新聞EP10：雪璋的顏色是極限的顏色"
                height="100%"
                src={video}
                frameBorder="0"
                allowFullScreen
            />
        </Card>
    );
}
