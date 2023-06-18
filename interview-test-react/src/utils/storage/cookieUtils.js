import Cookies from 'js-cookie';
import { KEY_CONSTANTS } from '../constants/keyConstant';

const getAuth = () => {
    const auth = Cookies.get(KEY_CONSTANTS.COOKIES.AUTH) || '';
    return auth ? JSON.parse(auth) : null;
};

const setAuth = (item) => {
    Cookies.set(KEY_CONSTANTS.COOKIES.AUTH, item, { secure: true });
};

const resetCookies = () => {
    Cookies.remove(KEY_CONSTANTS.COOKIES.AUTH);
};

export default {
    getAuth,
    setAuth,
    resetCookies,
};