import { useDispatch, useSelector } from 'react-redux';
import { resolveRegister, setFirstName, setLastName, setPassword, setUsername } from '../../../stores/auth/auth.reducer';
import { useNavigate } from 'react-router-dom';
import { STATE_STATUS } from '../../../utils/constants/stateStatus';
import { useEffect } from 'react';

const useRegister = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        status,
        message,
        username,
        password,
        firstName,
        lastName,
        data,
    } = useSelector((state) => state.auth);

    const handleRegister = () => {
        const payload = {
            first_name: firstName,
            last_name: lastName,
            username: username,
            password: password,
        };

        dispatch(resolveRegister(payload));
    }

    const handleSetUsername = (value) => {
        dispatch(setUsername(value));
    };

    const handleSetPassword = (value) => {
        dispatch(setPassword(value));
    };

    const handleSetFirstName = (value) => {
        dispatch(setFirstName(value));
    };

    const handleSetLastName = (value) => {
        dispatch(setLastName(value));
    };

    const handleNavigate = () => {
        setTimeout(() => {
            navigate('/login');
            location.reload();
        }, 500);
    };

    useEffect(() => {
        if (status === STATE_STATUS.success) {
            handleNavigate();
        }
    }, [status]);

    return {
        status,
        message,
        username,
        password,
        firstName,
        lastName,
        handleRegister,
        handleSetUsername,
        handleSetPassword,
        handleSetFirstName,
        handleSetLastName,
    };
}

export default useRegister;