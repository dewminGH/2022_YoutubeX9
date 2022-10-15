import axios from 'axios';

const KEY = 'AIzaSyCQr-o7qU9bEF8ki4EJ5VwWBWlQOa3D93k';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        key:KEY,
        part:'snippet',
        maxResults:10,
        type:'video'
    }
})