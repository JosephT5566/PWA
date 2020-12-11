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
import { CARD_TYPE } from '../../assets/types';
import { getCard, updateCard } from '../../apis/CardAPI';

import './styles.scss';

export default function BankCard({ id }) {
    const [card, setCard] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [open, setOpen] = useState(false);
    const [modified, setModified] = useState(false);
    const { t } = useTranslation();

    const exitPage = () => {
        window.onpopstate = () => {};
        window.history.back();
    };

    useEffect(() => {
        window.history.pushState(null, '');
        console.log('push state');
    }, []);

    useEffect(() => {
        window.onpopstate = () => {
            console.log('on pop state');
            if (modified === true) {
                if (window.confirm(t('bank.modified-confirm'))) {
                    exitPage();
                } else {
                    window.history.pushState(null, '');
                }
            } else {
                exitPage();
            }
        };

        return () => {
            window.onpopstate = () => {};
        };
    }, [modified]);

    useEffect(() => {
        async function getCardInfo() {
            // const _cardInfo = await mockService.fetchBankItem(userID, id);
            const response = await getCard(id);
            if (response.ok) {
                const _card = await response.json();
                setCard({ ..._card });
            }
        }
        getCardInfo();
    }, [id]);

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
                    label={t('bank.cardname')}
                    type={'text'}
                    required={true}
                    value={card[CARD_TYPE.cardName]}
                    handleChange={(value) => {
                        setCard({ ...card, [CARD_TYPE.cardName]: value });
                        setModified(true);
                    }}
                    isSubmit={isSubmit}
                />
                <TextInput
                    label={t('bank.bank')}
                    type={'text'}
                    required={true}
                    value={card[CARD_TYPE.bank]}
                    handleChange={(value) => {
                        setCard({ ...card, [CARD_TYPE.bank]: value });
                        setModified(true);
                    }}
                    isSubmit={isSubmit}
                />
                <TextInput
                    label={t('bank.branch')}
                    type={'text'}
                    required={true}
                    value={card[CARD_TYPE.branch]}
                    handleChange={(value) => {
                        setCard({ ...card, [CARD_TYPE.branch]: value });
                        setModified(true);
                    }}
                    isSubmit={isSubmit}
                />
                <TextInput
                    label={t('bank.account')}
                    type={'text'}
                    required={true}
                    value={card[CARD_TYPE.account]}
                    handleChange={(value) => {
                        setCard({ ...card, [CARD_TYPE.account]: value });
                        setModified(true);
                    }}
                    isSubmit={isSubmit}
                />
                <PasswordInput
                    label={t('bank.pin')}
                    required={true}
                    value={card[CARD_TYPE.pin]}
                    handleChange={(value) => {
                        setCard({ ...card, [CARD_TYPE.pin]: value });
                        setModified(true);
                    }}
                    isSubmit={isSubmit}
                />
                <PasswordInput
                    label={t('bank.payment-password')}
                    required={true}
                    value={card[CARD_TYPE.paymentPsd]}
                    handleChange={(value) => {
                        setCard({ ...card, [CARD_TYPE.paymentPsd]: value });
                        setModified(true);
                    }}
                    isSubmit={isSubmit}
                />
                <TextInput
                    label={t('bank.online-bank-account')}
                    type={'text'}
                    required={true}
                    value={card[CARD_TYPE.onlineAccount]}
                    handleChange={(value) => {
                        setCard({ ...card, [CARD_TYPE.onlineAccount]: value });
                        setModified(true);
                    }}
                    isSubmit={isSubmit}
                />
                <PasswordInput
                    label={t('bank.online-bank-password')}
                    required={true}
                    value={card[CARD_TYPE.onlinePsd]}
                    handleChange={(value) => {
                        setCard({ ...card, [CARD_TYPE.onlinePsd]: value });
                        setModified(true);
                    }}
                    isSubmit={isSubmit}
                />
                <PasswordInput
                    label={t('bank.security-code')}
                    required={true}
                    value={card[CARD_TYPE.securityCode]}
                    handleChange={(value) => {
                        setCard({ ...card, [CARD_TYPE.securityCode]: value });
                        setModified(true);
                    }}
                    isSubmit={isSubmit}
                />
            </>
        );
    };

    const isItemRequired = (item) => {
        switch (item) {
            case 'cardFrontImg':
                return true;
            case 'back':
                return true;
            case 'bank':
                return true;
            case 'branch':
                return true;
            case 'account':
                return true;
            case 'pin':
                return true;
            case 'paymentPassword':
                return true;
            case 'onlineAccount':
                return true;
            case 'onlinePassword':
                return true;
            case 'securityCode':
                return true;
            default:
                return false;
        }
    };

    const isAllRequiredDataFilled = () => {
        for (const item in card) {
            if (isItemRequired(item)) {
                if (card[item] === '') return false;
            }
        }
        return true;
    };

    const onSubmit = async () => {
        setIsSubmit(true);
        if (isAllRequiredDataFilled()) {
            // await mockService.updateBankItem(userID, id, card);
            const response = await updateCard(id, card);
            if (response.ok) setModified(false);
        }
        setTimeout(() => {
            setIsSubmit(false);
        }, 50);
    };

    return (
        <div className="ui container">
            <ArrowBackTitle title={card[CARD_TYPE.cardName] === '' ? `Card` : card[CARD_TYPE.cardName]} />
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
                    value={card[CARD_TYPE.cardFrontImg]}
                    handleChange={(picture) => {
                        setCard({ ...card, [CARD_TYPE.cardFrontImg]: picture });
                        setModified(true);
                    }}
                    isSubmit={isSubmit}
                    sizeMax={409600}
                />
                <PhotoUpload
                    className="photoupload"
                    title={t('bank.back')}
                    required={true}
                    value={card[CARD_TYPE.cardBackImg]}
                    handleChange={(picture) => {
                        setCard({ ...card, [CARD_TYPE.cardBackImg]: picture });
                        setModified(true);
                    }}
                    isSubmit={isSubmit}
                    sizeMax={409600}
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
