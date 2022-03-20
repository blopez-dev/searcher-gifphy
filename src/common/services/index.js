import http, { API_KEY } from '../http';

export const searchGif = (termToSearch) => http.get(`${API_KEY}&q=${termToSearch}&limit=25&offset=0&rating=g&lang=es`);
