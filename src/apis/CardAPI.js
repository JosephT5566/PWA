import { BACKEND_URL } from '../assets/types';

export const getAllCards = async () => {
    const response = await fetch(`${BACKEND_URL}/cards`, { method: 'GET', credentials: 'include' });
    return response;
};

export const getCard = async (cardID) => {
    const response = await fetch(`${BACKEND_URL}/cards/${cardID}`, { method: 'GET', credentials: 'include' });
    return response;
};

export const getAllCardsOfUser = async (userID) => {
    const response = await fetch(`${BACKEND_URL}/cards/user/${userID}`, { method: 'GET', credentials: 'include' });
    return response;
};

export const createCard = async (data) => {
    const response = await fetch(`${BACKEND_URL}/cards`, {
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        method: 'POST',
        credentials: 'include',
    });
    return response;
};

export const updateCard = async (cardID, data) => {
    const response = await fetch(`${BACKEND_URL}/cards/${cardID}`, {
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        method: 'PUT',
        credentials: 'include',
    });
    return response;
};

export const deleteCard = async (cardID) => {
    const response = await fetch(`${BACKEND_URL}/cards/${cardID}`, { method: 'DELETE', credentials: 'include' });
    return response;
};
