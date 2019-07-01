import axios from 'axios';

const KEY = 'AIzaSyBZw9Ff61wQnRqQ-saK0T_jEQ4aeT2KikE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
