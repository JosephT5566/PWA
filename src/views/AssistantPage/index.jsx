import React from 'react';
import { useTranslation } from 'react-i18next';

import Title from '../../components/Title/Title';

// import { makeStyles } from '@material-ui/core/styles';

import './styles.scss';

// const useStyle = makeStyles((theme) => ({}));

export default function AssistantPage() {
    // const classes = useStyle();
    const { t } = useTranslation();
    return (
        <div className="ui container">
            <Title title={t('assistant.title')} />
        </div>
    );
}
