import React from 'react';
import { useNavigation } from 'react-navi';
import Button from '@material-ui/core/Button';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    titleContainer: {
        display: 'flex',
        position: 'relative',
        [theme.breakpoints.up('lg')]: {
            flexDirection: 'left',
        },
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
    button: {
        [theme.breakpoints.down('md')]: {
            position: 'absolute',
            left: '0',
        },
    },
}));

export default function ArrowBackTitle(props) {
    const { title } = props;
    const classes = useStyles();
    const navigation = useNavigation();

    return (
        <div className={classes.titleContainer}>
            <Button className={classes.button} onClick={() => navigation.goBack()}>
                <ArrowBack />
            </Button>
            <Typography variant="h4">{title}</Typography>
        </div>
    );
}
