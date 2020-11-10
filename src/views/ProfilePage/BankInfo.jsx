import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-navi';

import ArrowBackTitle from '../../components/Title/ArrowBackTitle';
import ImageCard from '../../components/Card/ImageCard';

import IconButton from '@material-ui/core/IconButton';
import AddCircle from '@material-ui/icons/AddCircle';
import RemoveCircle from '@material-ui/icons/RemoveCircle';

import UserContext from '../../contexts/UserContext';
import { mockService } from '../../apis/mock';
import { USER_TYPE, CARD_TYPE } from '../../assets/types';
import { getAllCardsOfUser, createCard, deleteCard } from '../../apis/CardAPI';

import './styles.scss';

export default function BankInfo() {
    const [cards, setCards] = useState([]);
    const { user } = useContext(UserContext);
    const navigation = useNavigation();
    const { t } = useTranslation();
    const currentURL = navigation.getCurrentValue().url.pathname;

    const fetchCards = async () => {
        const response = await getAllCardsOfUser(user[USER_TYPE.id]);
        if (response.status === 200) {
            const _cards = await response.json();
            setCards([..._cards]);
        }
    };

    useEffect(() => {
        fetchCards();
    }, []);

    const onClickAddCards = async () => {
        // await mockService.appendBankItem(userID);
        if (window.confirm('You sure to add new card?')) {
            const responseAdd = await createCard({ userID: user[USER_TYPE.id] });
            if (responseAdd.status === 200) {
                await fetchCards();
            }
        }
    };

    const onClickRemoveCards = async (cardID) => {
        // await mockService.removeBankItem(userID, cardID);
        if (window.confirm('You sure to delete this card?')) {
            const responseDel = await deleteCard(cardID);
            if (responseDel.status === 200) {
                await fetchCards();
            }
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
