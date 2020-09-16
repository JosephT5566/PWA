import React from 'react';
import { useTranslation } from 'react-i18next';

import ArrowBackTitle from '../../components/Title/ArrowBackTitle';

import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
            <ArrowBackTitle title={t('profile.about')} />
            <Divider />
            <div className="ui container" style={{ padding: '1em 0' }}>
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
