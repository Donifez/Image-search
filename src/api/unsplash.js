import axios from 'axios';
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID sz2s1OrO1lg8j1nB2677WCZihnxZEBCGwYx4eMpwJuk',
  },
});
