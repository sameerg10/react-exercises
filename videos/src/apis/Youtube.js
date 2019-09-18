import axios from 'axios';

const KEY = 'AIzaSyCkq-J2rXOPnjxy7GzLknB_F1RSCcHxwZI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
