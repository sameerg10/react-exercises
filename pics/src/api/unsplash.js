import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 16e63f0e4640d71f1a5c5b652131b363a70038cb594864875d78fdd951c5030e'
    }
});