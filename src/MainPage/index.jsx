import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            backgroundColor: 'ORANGERED',
        },
        [theme.breakpoints.up('md')]: {
            backgroundColor: 'DARKTURQUOISE',
        },
        [theme.breakpoints.up('lg')]: {
            backgroundColor: 'OLIVEDRAB',
        },
    },
}));

export default function MainPage() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h2 className="ui h2">MainPage</h2>
        </div>
    );
}
