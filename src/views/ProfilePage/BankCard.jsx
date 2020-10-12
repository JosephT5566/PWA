import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import PasswordInput from '../../components/CustomInput/PasswordInput';
import TextInput from '../../components/CustomInput/TextInput';
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

import { mockService } from '../../apis/mock';

import './styles.scss';

const INIT_CARD_INFO = {
    cardName: '',
    front: '',
    back: '',
    bank: '',
    branch: '',
    account: '',
    pin: '',
    paymentPassword: '',
    onlineAccount: '',
    onlinePassword: '',
    securityCode: '',
};

export default function BankCard({ id }) {
    const [cardInfo, setCardInfo] = useState(INIT_CARD_INFO);
    const [isSubmit, setIsSubmit] = useState(false);
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        async function getCardInfo() {
            const _cardInfo = await mockService.fetchBankItem(id);
            setCardInfo({ ..._cardInfo });
        }
        getCardInfo();
    }, [id]);

    useEffect(() => {
        console.log('cardInfo', cardInfo);
    }, [cardInfo]);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    const renderInputs = () => {
        return (
            <>
                <TextInput
                    label={t('bank.bank')}
                    type={'text'}
                    required={true}
                    value={cardInfo.bank}
                    handleChange={(value) => setCardInfo({ ...cardInfo, bank: value })}
                    isSubmit={isSubmit}
                />
                <TextInput
                    label={t('bank.branch')}
                    type={'text'}
                    required={true}
                    value={cardInfo.branch}
                    handleChange={(value) => setCardInfo({ ...cardInfo, branch: value })}
                    isSubmit={isSubmit}
                />
                <TextInput
                    label={t('bank.account')}
                    type={'text'}
                    required={true}
                    value={cardInfo.account}
                    handleChange={(value) => setCardInfo({ ...cardInfo, account: value })}
                    isSubmit={isSubmit}
                />
                <PasswordInput
                    label={t('bank.pin')}
                    required={true}
                    value={cardInfo.pin}
                    handleChange={(value) => setCardInfo({ ...cardInfo, pin: value })}
                    isSubmit={isSubmit}
                />
                <PasswordInput
                    label={t('bank.payment-password')}
                    required={true}
                    value={cardInfo.paymentPassword}
                    handleChange={(value) => setCardInfo({ ...cardInfo, paymentPassword: value })}
                    isSubmit={isSubmit}
                />
                <TextInput
                    label={t('bank.online-bank-account')}
                    type={'text'}
                    required={true}
                    value={cardInfo.onlineAccount}
                    handleChange={(value) => setCardInfo({ ...cardInfo, onlineAccount: value })}
                    isSubmit={isSubmit}
                />
                <PasswordInput
                    label={t('bank.online-bank-password')}
                    required={true}
                    value={cardInfo.onlinePassword}
                    handleChange={(value) => setCardInfo({ ...cardInfo, onlinePassword: value })}
                    isSubmit={isSubmit}
                />
                <PasswordInput
                    label={t('bank.security-code')}
                    required={true}
                    value={cardInfo.securityCode}
                    handleChange={(value) => setCardInfo({ ...cardInfo, securityCode: value })}
                    isSubmit={isSubmit}
                />
            </>
        );
    };

    const isAllRequiredDataFilled = () => {
        for (let item in cardInfo) {
            if (cardInfo[item] === '' || cardInfo[item] === null) return false;
        }
        return true;
    };

    const onSubmit = () => {
        console.log(cardInfo);
        setIsSubmit(true);
        if (isAllRequiredDataFilled()) {
            // do something
        }
        setTimeout(() => {
            setIsSubmit(false);
        }, 50);
    };

    return (
        <div className="ui container">
            <ArrowBackTitle title={cardInfo.cardName === '' ? `Card ${id}` : cardInfo.cardName} />
            <div className="container lv2">
                <div className="alert">
                    <Alert variant="outlined" severity="warning">
                        <AlertTitle>{t('alert.warning')}</AlertTitle>
                        {t('bank.warning')}
                    </Alert>
                </div>
                <div className="title">
                    <h2>{t('bank.upload-bank-card')}</h2>
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
                <PhotoUpload
                    className="photoupload"
                    title={t('bank.front')}
                    required={true}
                    value={cardInfo.front}
                    handleChange={(picture) => {
                        setCardInfo({ ...cardInfo, front: picture });
                    }}
                    isSubmit={isSubmit}
                />
                <PhotoUpload
                    className="photoupload"
                    title={t('bank.back')}
                    required={true}
                    value={cardInfo.back}
                    handleChange={(picture) => {
                        setCardInfo({ ...cardInfo, back: picture });
                    }}
                    isSubmit={isSubmit}
                />

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
