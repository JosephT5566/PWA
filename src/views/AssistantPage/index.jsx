import React from 'react';

import Title from '../../components/Title/Title'

import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
    title: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('lg')]: {
            alignItems: 'left',
        },
        [theme.breakpoints.down('md')]: {
            alignItems: 'center',
        },
    },
}));

export default function AssistantPage() {
    const classes = useStyle();
    return (
        <div>
            <Title title="Assistant"/>
            <Divider />
        </div>
    );
}
