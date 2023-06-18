import { useDispatch, useSelector } from 'react-redux';
import { resolveLogin, setPassword, setUsername } from '../../../stores/auth/login/login.reducer';
import { useNavigate } from 'react-router-dom';
import { STATE_STATUS } from '../../../utils/constants/stateStatus';
import { useEffect } from 'react';
import cookieUtils from '../../../utils/storage/cookieUtils';

const useLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        status,
        message,
        username,
        password,
        data,
    } = useSelector((state) => state.login);

    const handleLogin = () => {
        const payload = {
            username: username,
            password: password,
        };

        dispatch(resolveLogin(payload));
    }

    const handleSetUsername = (value) => {
        dispatch(setUsername(value));
    };

    const handleSetPassword = (value) => {
        dispatch(setPassword(value));
    };

    const handleNavigate = () => {
        setTimeout(() => {
            navigate('/jobs');
            location.reload();
        }, 500);
    };

    const handleSetDataToLocalStorage = () => {
        const token = {
            'access_token': data?.token,
        };

        cookieUtils.setAuth(JSON.stringify(token));
    }

    useEffect(() => {
        if (status === STATE_STATUS.success) {
            handleNavigate();
            handleSetDataToLocalStorage();
        }
    }, [status]);

    return {
        status,
        message,
        username,
        password,
        handleLogin,
        handleSetUsername,
        handleSetPassword
    };
}

export default useLogin;