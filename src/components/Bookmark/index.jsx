import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CircularProgress from '@material-ui/core/CircularProgress';

import { getPreviewData } from '../../apis/PreviewWebApi';

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

    const fetchPreviewData = async () => {
        const response = await getPreviewData(url);
        if (response.status === 200) {
            const data = await response.json();
            console.log('preview data:', data);
            setPreview(data);
            setLoading(false);
        }
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
                    <div className={`main ${loadingClass}`} style={{ backgroundImage: `url(${preview.Image})` }}>
                        {renderLoading()}
                        <div className="title">
                            <h2>{preview.Title}</h2>
                        </div>
                    </div>
                    <div className="description">
                        <h3>{preview.Description}</h3>
                        <h6>{preview.Domain}</h6>
                    </div>
                </CardActionArea>
            </Card>
        </div>
    );
}
