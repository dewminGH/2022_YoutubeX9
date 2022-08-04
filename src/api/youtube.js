import axios from 'axios';

const KEY = 'AIzaSyBZLDDtlDKGLXRHxrCCnquqk_8fgoMtlPU';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        key:KEY,
        part:'snippet',
        maxResults:10,
        type:'video'
    }
})