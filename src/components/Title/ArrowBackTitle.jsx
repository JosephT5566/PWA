import React from 'react';
import { useNavigation } from 'react-navi';
import Button from '@material-ui/core/Button';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';

import './styles.scss';

export default function ArrowBackTitle(props) {
    const { title } = props;
    const navigation = useNavigation();

    return (
        <div className="title">
            <Button className="button" onClick={() => navigation.goBack()}>
                <ArrowBack />
            </Button>
            <Typography className="label" variant="h4">{title}</Typography>
        </div>
    );
}
