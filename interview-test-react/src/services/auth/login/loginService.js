import Axios from "../../services";

export const loginApi = async (payload) => {
    try {
        return await Axios.post('/auth/login', payload);
    } catch (error) {
        return error.response;
    }
};