import React, { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import Title from '../../components/Title/Title';
import InfoCard from '../../components/Card/InfoCard';
import ImageCard from '../../components/Card/ImageCard';
import VideoCard from '../../components/Card/VideoCard';
import Bookmark from '../../components/Bookmark';

import { makeStyles } from '@material-ui/core/styles';
import div from '@material-ui/core/Grid';

import LoginContext from '../../contexts/LoginContext';
import UserContext from '../../contexts/UserContext';
import { getArticles, getVideos } from '../../apis/NewsAPI';
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
}));

export default function MainPage() {
    const classes = useStyles();
    const [videos, setVideos] = useState([]);
    const [articles, setArticles] = useState([]);
    const { t } = useTranslation();
    const { isLoggedin } = useContext(LoginContext);
    const { user } = useContext(UserContext);

    const fetchVideos = async () => {
        const response = await getVideos();
        if (response.ok) {
            const videos = await response.json();
            setVideos(videos);
        }
    };

    const fetchArticles = async () => {
        const response = await getArticles();
        if (response.ok) {
            const articles = await response.json();
            setArticles(articles);
        }
    };

    useEffect(() => {
        fetchArticles();
        fetchVideos();
    }, []);

    const openImage = (data) => {
        var image = new Image();
        image.src = data;

        if (data.includes('http')) {
            window.open(data);
        } else {
            var w = window.open('');
            w.document.write(image.outerHTML);
            w.document.close();
        }
    };

    const renderWelcomeBlock = () => {
        let username = '';
        if (isLoggedin) {
            username = user[USER_TYPE.username] ? user[USER_TYPE.username].toUpperCase() : user[USER_TYPE.username];
            return (
                <>
                    {/* <Grid className={classes.content} container spacing={3} justitofy={'center'}>
                        <Grid className={classes.gridItem} item xs={12}>
                            <InfoCard
                                title="Joseph"
                                subtitle={t('home.welcome')}
                                image="https://source.unsplash.com/6W4F62sN_yI/640x960"
                            />
                        </Grid>
                    </Grid> */}
                    <h1>{`${username}, ${t('home.welcome')}`}</h1>
                    <div id="contractsContainer">
                        <div className="contract">
                            <ImageCard
                                label={t('home.history-contract')}
                                image={
                                    user[USER_TYPE.historyCon]
                                        ? user[USER_TYPE.historyCon]
                                        : 'https://source.unsplash.com/KEY8_zTEckY/640x960'
                                }
                                onClick={() => {
                                    openImage(user[USER_TYPE.historyCon]);
                                }}
                            />
                        </div>
                        <div className="contract">
                            <ImageCard
                                label={t('home.intelligent-contract')}
                                image={
                                    user[USER_TYPE.intelliCon]
                                        ? user[USER_TYPE.intelliCon]
                                        : 'https://source.unsplash.com/0QHKz1EV_Gc/640x800'
                                }
                                onClick={() => {
                                    openImage(user[USER_TYPE.intelliCon]);
                                }}
                            />
                        </div>
                        <div className="contract">
                            <ImageCard
                                label={t('home.arbitrage-contract')}
                                image={
                                    user[USER_TYPE.arbitrageCon]
                                        ? user[USER_TYPE.arbitrageCon]
                                        : 'https://source.unsplash.com/lJShoi-1RhA/640x1137'
                                }
                                onClick={() => {
                                    openImage(user[USER_TYPE.arbitrageCon]);
                                }}
                            />
                        </div>
                    </div>
                </>
            );
        } else return <h1>Hello Guest</h1>;
    };

    const renderVideos = () => (
        <div id="videosContainer">
            {videos.map((video, index) => (
                <div className="video" key={index}>
                    <VideoCard src={video.url}></VideoCard>
                </div>
            ))}
            {/* <div className="video">
                <VideoCard src="https://player.youku.com/embed/XNDkyMjAxMzUyNA=="></VideoCard>
            </div>
            <div className="video">
                <VideoCard src="https://player.youku.com/embed/XNDkxNTE1Njc2NA=="></VideoCard>
            </div>
            <div className="video">
                <VideoCard src="https://player.youku.com/embed/XNDg2OTQ0ODAwOA=="></VideoCard>
            </div>
            <div className="video">
                <VideoCard src="https://player.youku.com/embed/XNDg2OTQ0ODAwOA=="></VideoCard>
            </div> */}
        </div>
    );

    const renderArticles = () => (
        <div id="articlesContainer">
            {articles.map((article, index) => (
                <div className="article" key={index}>
                    <Bookmark url={article.url} />
                </div>
            ))}
        </div>
    );

    return (
        <div id="mainPage" className="ui container">
            <Title title={t('home.title')} />
            {renderWelcomeBlock()}
            {renderVideos()}
            {renderArticles()}
        </div>
    );
}
