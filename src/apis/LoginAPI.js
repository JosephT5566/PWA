import { BACKEND_URL } from '../assets/types';

export const login = async (username, password) => {
    const encode = btoa(`${username}:${password}`);
    const response = await fetch(`${BACKEND_URL}/login`, {
        headers: new Headers({
            Authorization: `Basic ${encode}`,
        }),
        method: 'GET',
        credentials: 'include',
    });
    return response;
};

export const logout = async () => {
    const response = await fetch(`${BACKEND_URL}/logout`, {
        method: 'GET',
        credentials: 'include',
    });
    return response;
};
