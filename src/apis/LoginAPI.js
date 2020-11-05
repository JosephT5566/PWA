import { BACKEND_URL } from '../assets/types';

export const login = async (data) => {
    const response = await fetch(`${BACKEND_URL}/login`, {
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        method: 'POST',
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
