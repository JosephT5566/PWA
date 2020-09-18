import React from 'react';
import { useNavigation } from 'react-navi';
import { useTranslation } from 'react-i18next';

import Title from '../../components/Title/Title';
import ImageCard from '../../components/Card/ImageCard';

import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import './styles.scss'

const useStyle = makeStyles(() => ({
    content: {
        padding: '10px 0',
    },
    gridItem: {
        maxHeight: '10em',
    },
}));

export default function DataPage() {
    const classes = useStyle();
    const navigation = useNavigation();
    const { t } = useTranslation();
    const currentURL = navigation.getCurrentValue().url.pathname;

    return (
        <div>
            <Title title={t('data.title')} />
            <Divider />
            <div className="ui container">
                <Grid container className={classes.content} spacing={3} justify={'center'}>
                    <Grid item className={classes.gridItem}>
                        <ImageCard
                            title="BTC"
                            image="https://source.unsplash.com/ON1ryil6C8k/640x426"
                            onClick={() => navigation.navigate(`${currentURL}/BTC`)}
                        />
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <ImageCard
                            title="ETH"
                            image="https://source.unsplash.com/0bO235Rhqec/640x426"
                            onClick={() => console.log('123')}
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
