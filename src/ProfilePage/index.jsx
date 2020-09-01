import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    button: {
        display: 'flex',
        padding: '5px 5% 5px 5%',
        justifyItems: 'center',
        justifyContent: 'center',
    },
}));

export default function ProfilePage() {
    const classes = useStyles();
    return (
        <div>
            <h2 className="ui h2">Profile</h2>
            <Divider />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className={classes.button}>
                    <Button variant="contained" fullWidth>
                        Basic message
                    </Button>
                </div>
                <div className={classes.button}>
                    <Button variant="contained" fullWidth>
                        Upload KYC
                    </Button>
                </div>
                <div className={classes.button}>
                    <Button variant="contained" fullWidth>
                        Private doc
                    </Button>
                </div>
                <div className={classes.button}>
                    <Button variant="contained" fullWidth>
                        About us
                    </Button>
                </div>
            </div>
        </div>
    );
}
