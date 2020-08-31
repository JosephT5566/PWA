import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            backgroundColor: 'ORANGERED',
        },
        [theme.breakpoints.up('md')]: {
            backgroundColor: 'DARKTURQUOISE',
        },
        [theme.breakpoints.up('lg')]: {
            backgroundColor: 'OLIVEDRAB',
        },
    },
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
    const [youtubeItems, setYoutubeItems] = useState(null);
    const classes = useStyles();

    const onGetYoutubes = () => {
        window.gapi.load('client', async () => {
            await window.gapi.client.init({
                apiKey: 'AIzaSyCrCFtI5SBI9NclTDJlPmIP80yzL-brpzM',
            });
            const response = await window.gapi.client.request({
                path:
                    'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC_XRq7JriAORvDe1lI1RAsA&maxResults=10&order=date',
            });
            const items = response.result.items;
            console.log(items);

            setYoutubeItems(Object.values(items));
        });
    };

    const renderButton = () => {
        return (
            <Button variant="contained" color="primary" onClick={onGetYoutubes}>
                Get youtube
            </Button>
        );
    };

    const renderYoutubes = (items) => {
        if (!items) return;
        console.log(items);
        return (
            <div>
                {items.map((item) => {
                    // console.log(`https://www.youtube.com/watch?v=${item.id.videoId}`);
                    return (
                        <iframe
                            title={item.snippet.title}
                            src={`https://www.youtube.com/embed/${item.id.videoId}`}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    );
                })}
            </div>
        );
    };

    const renderFroggy = () => {
        const froggys = [
            {
                src: 'asanQH0piQE',
                title: '【呱吉】密室蟑螂殺人事件！諾基驚人的真相是？',
            },
            {
                src: 'ixcWPjzMSOU',
                title: '【呱吉直播】呱吉電台EP55：演技以外你還愛我嗎？',
            },
            {
                src: '59EVB4GejGk',
                title: '【呱吉】呱張新聞EP10：雪璋的顏色是極限的顏色',
            },
            {
                src: '-rkheAdZx-A',
                title: '【呱吉】人生晚長 EP95  :  煮一鍋好音樂',
            },
            {
                src: 'UP4QSKK16Ds',
                title: '【呱吉直播】陪你睡覺EP1：我選擇死亡',
            },
            {
                src: 'C5kEJdyer00',
                title: '【呱吉直播】政治電台EP12：轟隆隆隆衝衝衝拉風引擎火箭發動',
            },
        ];
        return froggys.map((froggy, index) => (
            <Grid className={classes.gridItem} item xs={12} key={index}>
                <iframe
                    title={froggy.title}
                    src={`https://www.youtube.com/embed/${froggy.src}`}
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </Grid>
        ));
    };

    return (
        <div>
            <h2 className="ui h2">MainPage</h2>
            <Divider />
            {/* {renderButton()} */}
            <div className={classes.content}>
                <Grid container spacing={3}>
                    {renderFroggy()}
                </Grid>
            </div>
        </div>
    );
}
