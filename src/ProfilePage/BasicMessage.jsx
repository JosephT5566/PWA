import React from 'react';
import { useNavigation } from 'react-navi';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { Alert, AlertTitle } from '@material-ui/lab';
import TextField from '@material-ui/core/TextField';

const useStyle = makeStyles(() => ({
    titleContainer: {
        display: 'inline-flex',
    },
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
    const navigation = useNavigation();
    const renderTextFields = () => {
        const labels = [
            'E-mail',
            'First name',
            'Last name',
            'Address',
            'Postal',
            'County',
            'City',
            'Country',
            'Phone',
            'Birthday',
        ];
        const labelProps = {
            shrink: true,
            // variant: 'outlined,
        };
        return (
            <div className={classes.textFieldContainer}>
                {labels.map((label) => {
                    let type = '';
                    if (label === 'Birthday') type = 'date';
                    return (
                        <TextField
                            className={classes.textField}
                            fullWidth
                            variant="outlined"
                            InputLabelProps={labelProps}
                            type={type}
                            label={label}
                        />
                    );
                })}
            </div>
        );
    };

    return (
        <div>
            <div className={classes.titleContainer}>
                <IconButton color="default" onClick={() => navigation.goBack()}>
                    <ArrowBack />
                </IconButton>
                <h2 className="ui h2" style={{ margin: 'auto' }}>
                    Basic Message
                </h2>
            </div>
            <div>
                <Divider />
            </div>
            <div className={classes.contentContainer}>
                <Alert variant="outlined" severity="warning">
                    <AlertTitle>Warning</AlertTitle>
                    Once KYC is certified, you <strong>can not</strong> modify name or address by yourself
                </Alert>
                {renderTextFields()}
                <Button variant="contained" color="primary">
                    Submit
                </Button>
            </div>
        </div>
    );
}
