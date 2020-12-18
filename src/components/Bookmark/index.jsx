import React, { useState, useEffect } from 'react';
import _ from 'lodash'

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
        try {
            const response = await getPreviewData(url);
            if (response.ok) {
                const data = await response.json();
                setPreview(data);
                setLoading(false);
                if (_.isEmpty(data.Title)) {
                    throw new Error('preview title is empty');
                }
            } else {
                throw new Error('fetch preview data fail');
            }
        } catch (error) {
            console.log('get preview data err:', error);
            setPreview({ Title: url });
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
