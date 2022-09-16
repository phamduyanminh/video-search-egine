import axios from 'axios';

const KEY  = 'AIzaSyBfO3EOSVJ1inhMys2PuC6M1ggVIHbDYn0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResult: 5,
        key: KEY,
    }
});