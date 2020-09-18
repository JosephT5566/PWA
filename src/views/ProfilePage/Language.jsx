import React from 'react';
import { useTranslation } from 'react-i18next';

import i18n from '../../i18n';
import ArrowBackTitle from '../../components/Title/ArrowBackTitle';

import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import './styles.scss';

export default function TermDoc() {
    const { t } = useTranslation();

    return (
        <div>
            <ArrowBackTitle title={t('profile.language')} />
            <Divider />
            <div className="ui container">
                <div className="buttonContainer">
                    <Button
                        className="button"
                        variant="contained"
                        onClick={() => {
                            i18n.changeLanguage('zh-TW');
                        }}
                    >
                        繁體中文
                    </Button>
                    <Button
                        className="button"
                        variant="contained"
                        onClick={() => {
                            i18n.changeLanguage('en');
                        }}
                    >
                        English
                    </Button>
                    <Button
                        className="button"
                        variant="contained"
                    >
                        日本語
                    </Button>
                </div>
            </div>
        </div>
    );
}
