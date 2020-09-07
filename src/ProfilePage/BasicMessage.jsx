import React from 'react';

import TextField from '../components/TextField';
import ArrowBackTitle from '../components/Title/ArrowBackTitle';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyle = makeStyles(() => ({
    textFieldContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '1em 0',
    },
    textField: {
        margin: '0.5em 0',
    },
    contentContainer: {
        margin: '1em',
    },
}));

export default function BasicMessage() {
    const classes = useStyle();
    const renderTextFields = () => {
        const labels = [
            { text: 'E-mail', type: 'text' },
            { text: 'First name', type: 'text' },
            { text: 'Last name', type: 'text' },
            { text: 'Address', type: 'text' },
            { text: 'Postal', type: 'text' },
            { text: 'County', type: 'text' },
            { text: 'City', type: 'text' },
            { text: 'Country', type: 'text' },
            { text: 'Phone', type: 'text' },
            { text: 'Birthday', type: 'date' },
        ];
        return labels.map((label, index) => (
            <TextField className={classes.textField} label={label.text} type={label.type} key={index} />
        ));
    };

    return (
        <div>
            <ArrowBackTitle title="Basic Message" />
            <div>
                <Divider />
            </div>
            <div className={classes.contentContainer}>
                <Alert variant="outlined" severity="warning">
                    <AlertTitle>Warning</AlertTitle>
                    Once KYC is certified, you <strong>can not</strong> modify information like name or address by
                    yourself
                </Alert>
                <div className={classes.textFieldContainer}>{renderTextFields()}</div>
                <Button variant="contained" color="primary">
                    Submit
                </Button>
            </div>
        </div>
    );
}
