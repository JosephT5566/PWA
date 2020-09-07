import React, { useState } from 'react';

import TextField from '../components/TextField';
import ArrowBackTitle from '../components/Title/ArrowBackTitle';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { Alert, AlertTitle } from '@material-ui/lab';
import HelpIcon from '@material-ui/icons/Help';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const useStyle = makeStyles(() => ({
    textField: {
        margin: '0.5em 0',
    },
    contentContainer: {
        margin: '1em',
    },
    subContainer: {
        margin: '1em 0',
    },
}));

export default function UploadKYC() {
    const [open, setOpen] = useState(false);
    const classes = useStyle();

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    const renderInputs = () => {
        const labels = [
            { text: 'Bank', type: 'text' },
            { text: 'Branch', type: 'text' },
            { text: 'Account', type: 'text' },
            { text: 'PIN number', type: 'password' },
            { text: 'Payment password', type: 'password' },
            { text: 'Payment password', type: 'password' },
            { text: 'Online-bank account', type: 'text' },
            { text: 'Online-bank password', type: 'password' },
            { text: 'Security code', type: 'password' },
        ];

        return labels.map((label, index) => (
            <TextField className={classes.textField} label={label.text} type={label.type} key={index} />
        ));
    };

    return (
        <div>
            <ArrowBackTitle title="Upload KYC" />
            <div>
                <Divider />
            </div>
            <div className={classes.contentContainer}>
                <Alert variant="outlined" severity="warning">
                    <AlertTitle>Warning</AlertTitle>
                    Once KYC is certified, you <strong>can not</strong> modify information like name or address by
                    yourself
                </Alert>
                <div className={classes.subContainer}>
                    <div className={classes.titleContainer}>
                        <h3 style={{ margin: 'auto' }}>Please upload effective credential</h3>
                        <ClickAwayListener onClickAway={handleTooltipClose}>
                            <Tooltip
                                PopperProps={{
                                    disablePortal: true,
                                    popperOptions: {
                                        modifiers: {
                                            offset: {
                                                enabled: true,
                                                offset: '0, -25em',
                                            },
                                        },
                                    },
                                }}
                                onClose={handleTooltipClose}
                                open={open}
                                disableFocusListener
                                disableHoverListener
                                disableTouchListener
                                title="Passport / ID card / driver's license"
                            >
                                <IconButton onClick={handleTooltipOpen}>
                                    <HelpIcon />
                                </IconButton>
                            </Tooltip>
                        </ClickAwayListener>
                    </div>
                    <h3 style={{ margin: 'auto' }}>Front</h3>
                    <Button variant="contained" color="primary">
                        Upload
                    </Button>
                    <h3 style={{ margin: 'auto' }}>Back</h3>
                    <Button variant="contained" color="primary">
                        Upload
                    </Button>
                    <div style={{ marginTop: '1em' }}>
                        <Alert severity="info">
                            Please make sure the credential is valid of your country, and the photos are clearly and
                            recognizable.
                        </Alert>
                    </div>
                </div>
                <Divider />
                <div className={classes.subContainer}>
                    <h3 style={{ margin: 'auto' }}>Please enter bank infomation</h3>
                    {renderInputs()}
                </div>
                <Button variant="contained" color="primary">
                    Submit
                </Button>
            </div>
        </div>
    );
}
