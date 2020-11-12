import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CircularProgress from '@material-ui/core/CircularProgress';

import './styles.scss';

const useStyles = makeStyles(() => ({
    card: {
        width: '100%',
        position: 'relative',
        overflow: 'visible',
        borderRadius: '1em',
    },
    actionArea: {
        height: '100%',
        borderRadius: '1em',
    },
}));

export default function Bookmark({ url }) {
    const [loading, setLoading] = useState(true);
    const [preview, setPreview] = useState({});
    const classes = useStyles();
    const loadingClass = loading ? 'loading' : '';
    const api = 'https://lpdg.herokuapp.com/parse/link';

    const fetchPreviewData = async () => {
        const response = await fetch(api, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url }),
        });
        const data = await response.json();
        console.log('preview data:', data);
        setPreview(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchPreviewData();
    }, []);

    const renderLoading = () => (loading ? <CircularProgress color="secondary" /> : <></>);

    return (
        <div id="bookmark">
            <Card className={classes.card}>
                <CardActionArea
                    className={classes.actionArea}
                    onClick={() => {
                        if (!loading) window.open(url);
                    }}
                >
                    <div className={`main ${loadingClass}`} style={{ backgroundImage: `url(${preview.img})` }}>
                        {renderLoading()}
                        <div className="title">
                            <h2>{preview.title}</h2>
                        </div>
                    </div>
                    <div className="description">
                        <h3>{preview.description}</h3>
                        <h6>{preview.domain}</h6>
                    </div>
                </CardActionArea>
            </Card>
        </div>
    );
}
