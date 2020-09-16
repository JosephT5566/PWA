import React from 'react';
import { useTranslation } from 'react-i18next';

import Title from '../../components/Title/Title';

import Divider from '@material-ui/core/Divider';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyle = makeStyles((theme) => ({}));

export default function AssistantPage() {
    // const classes = useStyle();
    const { t } = useTranslation();
    return (
        <div>
            <Title title={t('assistant.title')} />
            <Divider />
        </div>
    );
}
