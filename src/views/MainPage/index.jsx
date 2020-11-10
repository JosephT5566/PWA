import React, { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import JWT from 'jsonwebtoken';

import Title from '../../components/Title/Title';
import NewsCard from '../../components/Card/NewsCard';
import InfoCard from '../../components/Card/InfoCard';
import ImageCard from '../../components/Card/ImageCard';
import VideoCard from '../../components/Card/VideoCard';

import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import LoginContext from '../../contexts/LoginContext';
import UserContext from '../../contexts/UserContext';
import { USER_TYPE } from '../../assets/types';

import './styles.scss';

const useStyles = makeStyles((theme) => ({
    gridItem: {
        display: 'flex',
        justifyContent: 'center',
        justifyItems: 'center',
    },
    content: {
        padding: '10px 0',
    },
    content2: {
        padding: '10px 0',
        height: '20em',
    },
    title: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('lg')]: {
            alignItems: 'left',
        },
        [theme.breakpoints.down('md')]: {
            alignItems: 'center',
        },
    },
}));

export default function MainPage() {
    const classes = useStyles();
    const { t } = useTranslation();
    const { isLoggedin } = useContext(LoginContext);
    const { user } = useContext(UserContext);

    const renderWelcomeBlock = () => {
        let username = '';
        if (isLoggedin) {
            username = user[USER_TYPE.username].toUpperCase();
            return (
                <>
                    {/* <Grid className={classes.content} container spacing={3} justify={'center'}>
                        <Grid className={classes.gridItem} item xs={12}>
                            <InfoCard
                                title="Joseph"
                                subtitle={t('home.welcome')}
                                image="https://source.unsplash.com/6W4F62sN_yI/640x960"
                            />
                        </Grid>
                    </Grid> */}
                    <h1>{`${username}, ${t('home.welcome')}`}</h1>
                    <Grid className={classes.content2} container spacing={3} justify={'center'}>
                        <Grid className={classes.gridItem} item xs={4}>
                            <ImageCard
                                label={t('home.history-contract')}
                                image={
                                    user[USER_TYPE.historyCon]
                                        ? user[USER_TYPE.historyCon]
                                        : 'https://source.unsplash.com/KEY8_zTEckY/640x960'
                                }
                            />
                        </Grid>
                        <Grid className={classes.gridItem} item xs={4}>
                            <ImageCard
                                label={t('home.intelligent-contract')}
                                image={
                                    user[USER_TYPE.intelliCon]
                                        ? user[USER_TYPE.intelliCon]
                                        : 'https://source.unsplash.com/0QHKz1EV_Gc/640x800'
                                }
                            />
                        </Grid>
                        <Grid className={classes.gridItem} item xs={4}>
                            <ImageCard
                                label={t('home.arbitrage-contract')}
                                image={
                                    user[USER_TYPE.arbitrageCon]
                                        ? user[USER_TYPE.arbitrageCon]
                                        : 'https://source.unsplash.com/lJShoi-1RhA/640x1137'
                                }
                            />
                        </Grid>
                    </Grid>
                </>
            );
        } else return <h1>Hello Guest</h1>;
    };

    return (
        <div className="ui container">
            <Title title={t('home.title')} />
            {renderWelcomeBlock()}
            <Divider />
            <Grid className={classes.content} container spacing={3} justify={'center'}>
                {/* {renderFroggy()} */}
                <Grid className={classes.gridItem} item lg={6} xs={12}>
                    <VideoCard src="https://www.youtube.com/embed/asanQH0piQE" />
                </Grid>
                <Grid className={classes.gridItem} item lg={6} xs={12}>
                    <VideoCard src="https://www.youtube.com/embed/59EVB4GejGk" />
                </Grid>
                <Grid className={classes.gridItem} item lg={6} xs={12}>
                    <VideoCard src="https://www.youtube.com/embed/_wH5lSI5Dgw" />
                </Grid>
                <Grid className={classes.gridItem} item lg={6} xs={12}>
                    <VideoCard src="https://www.youtube.com/embed/LUaYe_7cmxQ" />
                </Grid>
            </Grid>
            <Divider />
            <Grid className={classes.content} container spacing={3} justify={'center'}>
                <Grid className={classes.gridItem} item lg={6} xs={12}>
                    <NewsCard
                        title="Kentucky police pull over driver after spotting drawn-on license plate"
                        image="https://source.unsplash.com/y46EzhejDNE/640x489"
                        avatar="https://i.pravatar.cc/300?img=13"
                        author="Bradford Betz"
                        date="Sep 07 | 2 Min Read"
                        tags={['fashion', 'funny']}
                    />
                </Grid>
                <Grid className={classes.gridItem} item lg={6} xs={12}>
                    <NewsCard
                        title="Kentucky police pull over driver after spotting drawn-on license plate"
                        image="https://source.unsplash.com/HI_pmHwEfDU/640x426"
                        avatar="https://i.pravatar.cc/300?img=13"
                        author="Bradford Betz"
                        date="Sep 07 | 2 Min Read"
                        tags={['fashion', 'funny']}
                    />
                </Grid>
            </Grid>
        </div>
    );
}
