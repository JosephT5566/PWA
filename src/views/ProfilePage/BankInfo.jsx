import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-navi';
import LoginContext from '../../contexts/LoginContext';

import ArrowBackTitle from '../../components/Title/ArrowBackTitle';
import ImageCard from '../../components/Card/ImageCard';

import IconButton from '@material-ui/core/IconButton';
import AddCircle from '@material-ui/icons/AddCircle';
import RemoveCircle from '@material-ui/icons/RemoveCircle';

import { mockService } from '../../apis/mock';
import { BACKEND_URL, CARD_TYPE } from '../../assets/types';

import './styles.scss';

export default function BankInfo() {
    const [cards, setCards] = useState([]);
    const navigation = useNavigation();
    const { t } = useTranslation();
    const { userID } = useContext(LoginContext);
    const currentURL = navigation.getCurrentValue().url.pathname;

    useEffect(() => {
        async function getCards() {
            // const _cards = await mockService.fetchBankItems(userID);
            const response = await fetch(`${BACKEND_URL}/cards/${userID}`, { method: 'GET' });
            if (response.status !== 200) return;
            const _cards = await response.json();
            setCards([..._cards]);
        }
        getCards();
    }, [userID]);

    const onClickAddCards = async () => {
        // await mockService.appendBankItem(userID);
        const responseAdd = await fetch(`${BACKEND_URL}/cards/${userID}`, { method: 'POST' });
        if (responseAdd.status !== 200) return;

        // const _cards = await mockService.fetchBankItems(userID);
        console.log('still fetch data')
        const responseGet = await fetch(`${BACKEND_URL}/cards/${userID}`, { method: 'GET' });
        if (responseGet.status === 200) {
            const _cards = await responseGet.json();
            setCards([..._cards]);
        }
    };

    const onClickRemoveCards = async (cardID) => {
        // await mockService.removeBankItem(userID, cardID);
        const responseDel = await fetch(`${BACKEND_URL}/card/${cardID}`, { method: 'DELETE' });
        if (responseDel.status !== 200) return;

        // const _cards = await mockService.fetchBankItems(userID);
        const responseGet = await fetch(`${BACKEND_URL}/cards/${userID}`, { method: 'GET' });
        if (responseGet.status === 200) {
            const _cards = await responseGet.json();
            setCards([..._cards]);
        }
    };

    const renderBankList = () => {
        const defaultImage = 'https://i.imgur.com/n24MrdT.gif';
        return (
            <>
                {cards.map((card, index) => (
                    <div key={index} className="bank-card-container">
                        <ImageCard
                            className="bank-card"
                            label={card[CARD_TYPE.cardName] !== '' ? card[CARD_TYPE.cardName] : `Card ${index}`}
                            image={card[CARD_TYPE.cardFrontImg] !== '' ? card[CARD_TYPE.cardFrontImg] : defaultImage}
                            onClick={() => {
                                navigation.navigate(`${currentURL}/${card[CARD_TYPE.id]}`);
                            }}
                        />
                        <IconButton
                            className="icon remove active"
                            onClick={async () => await onClickRemoveCards(card[CARD_TYPE.id])}
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
