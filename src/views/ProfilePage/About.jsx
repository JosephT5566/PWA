import React from 'react';
import { useTranslation } from 'react-i18next';

import ArrowBackTitle from '../../components/Title/ArrowBackTitle';

import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import '../styles.scss'

export default function TermDoc() {
    const { t } = useTranslation();

    return (
        <div>
            <ArrowBackTitle title={t('profile.about')} />
            <Divider />
            <div className="ui container">
                <Card variant="outlined">
                    <CardHeader title="sunt aut facere repellat provident occaecati excepturi" />
                    <CardContent>
                        <Typography>
                            quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae
                            ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
