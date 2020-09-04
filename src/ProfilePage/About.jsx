import React from 'react';
import { useNavigation } from 'react-navi';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    titleContainer: {
        display: 'inline-flex',
    },
    CardsContainer: {
        padding:'1em',
        display: 'flex',
        flexDirection: 'column',
    },
    button: {
        display: 'flex',
        padding: '5px 5% 5px 5%',
        justifyItems: 'center',
        justifyContent: 'center',
    },
}));

export default function TermDoc() {
    const classes = useStyles();
    const navigation = useNavigation();

    return (
        <div>
            <div className={classes.titleContainer}>
                <IconButton color="default" onClick={() => navigation.goBack()}>
                    <ArrowBack />
                </IconButton>
                <h2 className="ui h2" style={{ margin: 'auto' }}>
                    About Us
                </h2>
            </div>
            <Divider />
            <div className={classes.CardsContainer}>
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
