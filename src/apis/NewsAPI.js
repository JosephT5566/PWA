import { BACKEND_URL } from '../assets/types';

export const getArticles = async () => {
    const response = await fetch(`${BACKEND_URL}/articles`, { method: 'GET' });
    return response;
};

export const getVideos = async () => {
    const response = await fetch(`${BACKEND_URL}/videos`, { method: 'GET' });
    return response;
};
