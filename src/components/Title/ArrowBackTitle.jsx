import React from 'react';
import { useNavigation } from 'react-navi';
import Button from '@material-ui/core/Button';
import ArrowBack from '@material-ui/icons/ArrowBack';

import './styles.scss';

export default function ArrowBackTitle(props) {
    const { title } = props;
    const navigation = useNavigation();

    return (
        <div className="title">
            <Button className="button" onClick={() => navigation.goBack()}>
                <ArrowBack />
            </Button>
            <h1 className="label">{title}</h1>
        </div>
    );
}
