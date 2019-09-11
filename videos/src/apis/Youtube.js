import axios from 'axios';


const KEY = 'AIzaSyCxCD_7Y380_JuQX4B20UpYzX5Lmac2rKs';

export default axios.create({
    baseURL: 'https://googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
