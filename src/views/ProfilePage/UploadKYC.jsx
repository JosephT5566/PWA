import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import CustomInput from '../../components/CustomInput';
import ArrowBackTitle from '../../components/Title/ArrowBackTitle';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { Alert, AlertTitle } from '@material-ui/lab';
import HelpIcon from '@material-ui/icons/Help';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import '../styles.scss'

const useStyle = makeStyles(() => ({
    header: {
        padding: '0.5em 0',
        display: 'flex',
    },
    subContainer: {
        margin: '1em 0',
    },
    tooltip: {
        padding: '0 0.5em',
    },
}));

export default function UploadKYC() {
    const [open, setOpen] = useState(false);
    const classes = useStyle();
    const { t } = useTranslation();

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    const renderInputs = () => {
        const labels = [
            { text: t('upload-kyc.bank'), type: 'text' },
            { text: t('upload-kyc.branch'), type: 'text' },
            { text: t('upload-kyc.account'), type: 'text' },
            { text: t('upload-kyc.pin'), type: 'password' },
            { text: t('upload-kyc.payment-account'), type: 'password' },
            { text: t('upload-kyc.online-bank-account'), type: 'text' },
            { text: t('upload-kyc.online-bank-password'), type: 'password' },
            { text: t('upload-kyc.security-code'), type: 'password' },
        ];

        return labels.map((label, index) => <CustomInput label={label.text} type={label.type} key={index} />);
    };

    return (
        <div>
            <ArrowBackTitle title={t('upload-kyc.title')} />
            <Divider />
            <div className="ui container">
                <Alert variant="outlined" severity="warning">
                    <AlertTitle>{t('alert.warning')}</AlertTitle>
                    {t('upload-kyc.warning')}
                </Alert>
                <div className={classes.subContainer}>
                    <div className={classes.header} style={{ display: 'flex' }}>
                        <Typography variant={'h5'}>{t('upload-kyc.upload-title')}</Typography>
                        <ClickAwayListener onClickAway={handleTooltipClose}>
                            <Tooltip
                                className={classes.tooltip}
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
                                title={t('upload-kyc.hint')}
                            >
                                <IconButton onClick={handleTooltipOpen}>
                                    <HelpIcon />
                                </IconButton>
                            </Tooltip>
                        </ClickAwayListener>
                    </div>
                    <Typography variant={'h6'}>{t('upload-kyc.front')}</Typography>
                    <Button variant="contained" color="primary">
                        {t('upload-kyc.upload')}
                    </Button>
                    <Typography variant={'h6'}>{t('upload-kyc.back')}</Typography>
                    <Button variant="contained" color="primary">
                        {t('upload-kyc.upload')}
                    </Button>
                    <div style={{ marginTop: '1em' }}>
                        <Alert severity="info">{t('upload-kyc.warning-credential')}</Alert>
                    </div>
                </div>
                <Divider />
                <div className={classes.subContainer}>
                    <div className={classes.header}>
                        <Typography variant={'h5'}>{t('upload-kyc.bank-info-title')}</Typography>
                    </div>
                    {renderInputs()}
                </div>
                <Button variant="contained" color="primary">
                    {t('upload-kyc.submit')}
                </Button>
            </div>
        </div>
    );
}
