import Axios from "../services";

export const loginApi = async (payload) => {
    try {
        return await Axios.post('/auth/login', payload);
    } catch (error) {
        return error.response;
    }
};

export const registerApi = async (payload) => {
    try {
        return await Axios.post('/auth/register', payload);
    } catch (error) {
        return error.response;
    }
};