import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import { makeStyles } from '@material-ui/core/styles';

import './style.scss';

const useStyle = makeStyles((theme) => ({
    setWidth: {
        [theme.breakpoints.up('md')]: {
            width: '50%',
        },
        [theme.breakpoints.only('sm')]: {
            width: '60%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '80%',
        },
    },
}));

export default function PhotoUpload() {
    const [picture, setPicture] = useState([]);
    const classes = useStyle();
    const { t } = useTranslation();

    return (
        <div>
            <Card className="card-outer" variant="outlined">
                <Card className={`card-inner ${classes.setWidth}`} variant="outlined">
                    <CardActionArea
                        className="cardAction"
                        onClick={() => {
                            console.log('oh~');
                        }}
                    >
                        <div className="content">
                            <AddCircleOutline />
                            <Typography>{t('upload-pic')}</Typography>
                        </div>
                    </CardActionArea>
                </Card>
            </Card>
        </div>
    );
}
