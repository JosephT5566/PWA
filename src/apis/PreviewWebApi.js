import { BACKEND_URL } from '../assets/types';

// { Domain, Title, Description, Images }
export const getPreviewData = async (url) => {
    const response = await fetch(`${BACKEND_URL}/preview-web`, {
        body: url,
        method: 'POST',
        credentials: 'include',
    });
    return response;
};
