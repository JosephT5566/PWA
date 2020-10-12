import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-navi';

import ArrowBackTitle from '../../components/Title/ArrowBackTitle';
import ImageCard from '../../components/Card/ImageCard';

import IconButton from '@material-ui/core/IconButton';
import AddCircle from '@material-ui/icons/AddCircle';
import RemoveCircle from '@material-ui/icons/RemoveCircle';

import { mockService } from '../../apis/mock';

import './styles.scss';

export default function BankInfo() {
    const [bankList, setBankList] = useState([]);
    const navigation = useNavigation();
    const { t } = useTranslation();
    const currentURL = navigation.getCurrentValue().url.pathname;

    useEffect(() => {
        async function getBankList() {
            const _bankList = await mockService.fetchBankList();
            setBankList([..._bankList]);
        }
        getBankList();
    }, []);

    useEffect(() => {
        console.log('bankList: ', bankList);
    }, [bankList]);

    const onClickAddCards = async () => {
        await mockService.appendBankItem();
        const _bankList = await mockService.fetchBankList();
        setBankList([..._bankList]);
    };

    const onClickRemoveCards = async (index) => {
        await mockService.removeBankItem(index);
        const _bankList = await mockService.fetchBankList();
        setBankList([..._bankList]);
    };

    const renderBankList = () => {
        const defaultImage = 'https://i.imgur.com/n24MrdT.gif';
        return (
            <>
                {bankList.map((bankcard, index) => (
                    <div key={index} className="bank-card-container">
                        <ImageCard
                            className="bank-card"
                            label={bankcard.cardName !== '' ? bankcard.cardName : `Card ${index}`}
                            image={bankcard.front !== '' ? bankcard.front : defaultImage}
                            onClick={() => {
                                navigation.navigate(`${currentURL}/${index}`);
                            }}
                        />
                        <IconButton
                            className="icon remove active"
                            onClick={async () => await onClickRemoveCards(index)}
                        >
                            <RemoveCircle />
                        </IconButton>
                    </div>
                ))}
            </>
        );
    };

    return (
        <div id="bank-info" className="ui container">
            <ArrowBackTitle title={t('bank.title')} />
            <div className="container lv2">
                <div className="title">
                    <h2>{t('bank.upload-bank-card')}</h2>
                </div>
                <div className="bank-list-container">
                    {renderBankList()}
                    <div className="icons-container">
                        <IconButton className="icon add active" onClick={async () => await onClickAddCards()}>
                            <AddCircle fontSize="large" />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
