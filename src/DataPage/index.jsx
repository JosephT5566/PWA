import React from 'react';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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

export default function ProfilePage() {
    const classes = useStyle();
    return (
        <div>
            <div className={classes.title}>
                <Typography variant="h4">Data</Typography>
            </div>
            <Divider />
        </div>
    );
}
