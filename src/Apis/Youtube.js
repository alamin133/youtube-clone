import axios from 'axios';
const KEY='AIzaSyCj7Nj7Tr4b5Vuiz9FUyDPk7kt0aNtUIEk';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults:5,
        key:KEY
    }

})