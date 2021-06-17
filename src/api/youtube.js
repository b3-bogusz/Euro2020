import axios from 'axios';

const KEY = 'AIzaSyA7vVibiONOvNROJXN8XS5-B3Kjn_ke0CM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: KEY
    }
});