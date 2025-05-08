import axios from 'axios';
const PROD_URL = 'https://student-backend-xj6u.onrender.com';
const DEV_URL = 'http://localhost:3000';

export default axios.create({
    baseURL: DEV_URL,
});

export const axiosPrivate = axios.create({
    baseURL: DEV_URL,
    headers: {'Content-Type': 'application/json'},
    withCredentials: true   
})