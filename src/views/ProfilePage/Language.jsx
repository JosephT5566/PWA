import React from 'react';
import { useTranslation } from 'react-i18next';

import i18n from '../../i18n';
import ArrowBackTitle from '../../components/Title/ArrowBackTitle';

import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    CardsContainer: {
        padding: '1em',
        display: 'flex',
        flexDirection: 'column',
    },
}));

export default function TermDoc() {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <div>
            <ArrowBackTitle title={t('profile.language')} />
            <Divider />
            <div className="ui container">
                <div className={classes.CardsContainer}>
                    <div className={classes.button}>
                        <Button
                            variant="contained"
                            style={{ margin: '0px 10px' }}
                            onClick={() => {
                                i18n.changeLanguage('zh-TW');
                            }}
                        >
                            繁體中文
                        </Button>
                        <Button
                            variant="contained"
                            style={{ margin: '0px 10px' }}
                            onClick={() => {
                                i18n.changeLanguage('en');
                            }}
                        >
                            English
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
