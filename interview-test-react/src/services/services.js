import axios from "axios";
import cookieUtils from "../utils/storage/cookieUtils";

const baseURL = 'http://localhost:3000';

const Axios = axios.create({
    baseURL: baseURL,
    timeout: 60000,
});

Axios.interceptors.request.use(
    async (config) => {
        if (config.headers === undefined) {
            config.headers = {};
        }
        const token = cookieUtils.getAuth()?.access_token;

        if (token) config.headers.Authorization = 'Bearer ' + token;

        return config;
    },
    (error) => {
        Promise.reject(error);
    },
);

Axios.interceptors.response.use(
    (res) => {
        return res;
    },
    async (error) => {
        const errorResponse = {
            ...error,
            response: {
                ...error.response,
                error: true,
            },
        };

        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            cookieUtils.resetCookies();
            window.location.pathname = '/login';
        }
        if (error.response === undefined || error.response === 'undefined') {
            return Promise.reject(errorResponse);
        }
        if (error.response.status) {
            return Promise.reject(errorResponse);
        }
    },
);

export default Axios;