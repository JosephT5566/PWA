import React from 'react';

import ArrowBackTitle from '../../components/Title/ArrowBackTitle';
import Victory from '../../components/Victory';

import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import './styles.scss';

const useStyle = makeStyles(() => ({
    content: {
        padding: '10px 0',
    },
}));

export default function Plot({ id }) {
    const classes = useStyle();
    return (
        <div className="ui container">
            <ArrowBackTitle title={id} />
            <div className={classes.content}>
                <Victory />
            </div>
        </div>
    );
}
