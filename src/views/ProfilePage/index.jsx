import React from 'react';
import { useNavigation } from 'react-navi';
import { useTranslation } from 'react-i18next';

import Title from '../../components/Title/Title';

import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import '../styles.scss';

export default function ProfilePage() {
    const navigation = useNavigation();
    const { t } = useTranslation();
    const currentURL = navigation.getCurrentValue().url.pathname;

    const onNavigate = (e) => {
        navigation.navigate(`${currentURL}/${e.currentTarget.value}`);
    };

    return (
        <div>
            <Title title={t('profile.title')} />
            <Divider />
            <div className="ui container">
                <div className="buttonContainer">
                    <Button className="button" variant="contained" value="basic" onClick={onNavigate}>
                        {t('profile.basic')}
                    </Button>
                    <Button className="button" variant="contained" value="upload" onClick={onNavigate}>
                        {t('profile.upload-kyc')}
                    </Button>
                    <Button className="button" variant="contained" value="doc" onClick={onNavigate}>
                        {t('profile.document')}
                    </Button>
                    <Button className="button" variant="contained" value="about" onClick={onNavigate}>
                        {t('profile.about')}
                    </Button>
                    <Button className="button" variant="contained" value="language" onClick={onNavigate}>
                        {t('profile.language')}
                    </Button>
                </div>
            </div>
        </div>
    );
}
