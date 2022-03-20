import axios from 'axios';

export const API_KEY = 'Z7oS0VAmrso597M5z15ueE4OtA1D4pBz';
export const baseURL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}`;

export default axios.create({
  baseURL
});
