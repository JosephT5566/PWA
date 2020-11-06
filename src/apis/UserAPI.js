import { BACKEND_URL } from '../assets/types';

export const getAllUsers = async () => {
    const response = await fetch(`${BACKEND_URL}/users/`, { method: 'GET', credentials: 'include' });
    return response;
};

export const getUser = async (userID) => {
    const response = await fetch(`${BACKEND_URL}/users/${userID}`, { method: 'GET', credentials: 'include' });
    return response;
};

export const createUser = async (data) => {
    const response = await fetch(`${BACKEND_URL}/users/`, {
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        method: 'POST',
        credentials: 'include',
    });
    return response;
};

export const updateUser = async (userID, data) => {
    const response = await fetch(`${BACKEND_URL}/users/${userID}`, {
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        method: 'PUT',
        credentials: 'include',
    });
    return response;
};

export const deleteUser = async (userID) => {
    const response = await fetch(`${BACKEND_URL}/users/${userID}`, { method: 'DELETE', credentials: 'include' });
    return response;
};
