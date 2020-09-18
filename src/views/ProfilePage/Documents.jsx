import React from 'react';
import { useTranslation } from 'react-i18next';

import ArrowBackTitle from '../../components/Title/ArrowBackTitle';

import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import './styles.scss';

export default function TermDoc() {
    const { t } = useTranslation();

    const onClickDownload = (e) => {
        console.log(e.target.value);
    };

    return (
        <div>
            <ArrowBackTitle title={t('documents.title')} />
            <Divider />
            <div className="ui container">
                <div className="buttonContainer">
                    <Button className="button" variant="contained" value="basic" onClick={onClickDownload}>
                        {t('documents.terms')}
                    </Button>
                    <Button className="button" variant="contained" value="upload" onClick={onClickDownload}>
                        {t('documents.private-policy')}
                    </Button>
                    <Button className="button" variant="contained" value="doc" onClick={onClickDownload}>
                        {t('documents.anti-fraud-policy')}
                    </Button>
                    <Button className="button" variant="contained" value="about" onClick={onClickDownload}>
                        {t('documents.income-disclaimer')}
                    </Button>
                    <Button className="button" variant="contained" value="about" onClick={onClickDownload}>
                        {t('documents.consent')}
                    </Button>
                </div>
            </div>
        </div>
    );
}
