import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/tutorials/';

class TutorialService {
    getAll() {
        return axios.get(API_URL, { headers: authHeader() });
    }

    get(id) {
        return axios.get(`${API_URL}${id}`, { headers: authHeader() });
    }

    create(data) {
        return axios.post(API_URL, data, { headers: authHeader() });
    }

    update(id, data) {
        return axios.put(`${API_URL}${id}`, data, { headers: authHeader() });
    }

    delete(id) {
        return axios.delete(`${API_URL}${id}`, { headers: authHeader() });
    }

    deleteAll() {
        return axios.delete(API_URL, { headers: authHeader() });
    }

    findByTitle(title) {
        return axios.get(`${API_URL}?title=${title}`, { headers: authHeader() });
    }
}

export default new TutorialService();
