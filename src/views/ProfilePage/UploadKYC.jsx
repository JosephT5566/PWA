import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import CustomInput from '../../components/CustomInput';
import ArrowBackTitle from '../../components/Title/ArrowBackTitle';
import PhotoUpload from '../../components/PhotoUpload';
import Button from '../../components/Button';

import IconButton from '@material-ui/core/IconButton';
// import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { Alert, AlertTitle } from '@material-ui/lab';
import HelpIcon from '@material-ui/icons/Help';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import './styles.scss';

const init_data = {
    bank: '',
    branch: '',
    account: '',
    pin: '',
    paymentAccount: '',
    onlineAccount: '',
    onlinePassword: '',
    securityCode: '',
    frontPhoto: null,
    backPhoto: null,
};

export default function UploadKYC() {
    const [data, setData] = useState(init_data);
    const [isSubmit, setIsSubmit] = useState(false);
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    const renderInputs = () => {
        const labels = [
            {
                text: t('bank.bank'),
                type: 'text',
                getValue: (value) => setData({ ...data, bank: value }),
                required: true,
                isSubmit: isSubmit,
            },
            {
                text: t('bank.branch'),
                type: 'text',
                getValue: (value) => setData({ ...data, branch: value }),
                required: true,
                isSubmit: isSubmit,
            },
            {
                text: t('bank.account'),
                type: 'text',
                getValue: (value) => setData({ ...data, account: value }),
                required: true,
                isSubmit: isSubmit,
            },
            {
                text: t('bank.pin'),
                type: 'password',
                getValue: (value) => setData({ ...data, pin: value }),
                required: true,
                isSubmit: isSubmit,
            },
            {
                text: t('bank.payment-account'),
                type: 'password',
                getValue: (value) => setData({ ...data, paymentAccount: value }),
                required: true,
                isSubmit: isSubmit,
            },
            {
                text: t('bank.online-bank-account'),
                type: 'text',
                getValue: (value) => setData({ ...data, onlineAccount: value }),
                required: true,
                isSubmit: isSubmit,
            },
            {
                text: t('bank.online-bank-password'),
                type: 'password',
                getValue: (value) => setData({ ...data, onlinePassword: value }),
                required: true,
                isSubmit: isSubmit,
            },
            {
                text: t('bank.security-code'),
                type: 'password',
                getValue: (value) => setData({ ...data, securityCode: value }),
                required: true,
                isSubmit: isSubmit,
            },
        ];

        return labels.map((label, index) => (
            <CustomInput
                label={label.text}
                type={label.type}
                required={label.required}
                isSubmit={isSubmit}
                key={index}
            />
        ));
    };

    const onSubmit = () => {
        setIsSubmit(true);
        setTimeout(() => {
            setIsSubmit(false);
        }, 50);
    };

    return (
        <div className="ui container">
            <ArrowBackTitle title={t('bank.title')} />
            <div className="container lv2">
                <div className="alert">
                    <Alert variant="outlined" severity="warning">
                        <AlertTitle>{t('alert.warning')}</AlertTitle>
                        {t('bank.warning')}
                    </Alert>
                </div>
                <div className="title">
                    <h2>{t('bank.upload-header')}</h2>
                    <ClickAwayListener onClickAway={handleTooltipClose}>
                        <Tooltip
                            className="tooltip"
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
                            title={t('bank.hint')}
                        >
                            <IconButton onClick={handleTooltipOpen}>
                                <HelpIcon />
                            </IconButton>
                        </Tooltip>
                    </ClickAwayListener>
                </div>
                <h3 variant={'h6'}>{t('bank.front')}</h3>
                <div>
                    <PhotoUpload />
                </div>
                <h3 variant={'h6'}>{t('bank.back')}</h3>
                <div>
                    <PhotoUpload />
                </div>
                <div className="alert">
                    <Alert severity="info">{t('bank.warning-credential')}</Alert>
                </div>
            </div>
            <Divider />
            <div className="container lv2">
                <div className="title">
                    <h2 variant={'h5'}>{t('bank.bank-info-title')}</h2>
                </div>
                {renderInputs()}
                <Button label={t('bank.submit')} onClick={onSubmit}></Button>
            </div>
        </div>
    );
}
