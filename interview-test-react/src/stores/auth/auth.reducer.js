import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginApi, registerApi } from "../../services/auth/authService";
import { STATE_STATUS } from "../../utils/constants/stateStatus";

export const resolveLogin = createAsyncThunk(
    'resolve/auth/login',
    async (payload, rejectWithValue) => {
        const response = await loginApi(payload);

        if (response.error !== null) {
            return response.data;
        }
        return rejectWithValue(response.error);
    }
);

export const resolveRegister = createAsyncThunk(
    'resolve/auth/register',
    async (payload, rejectWithValue) => {
        const response = await registerApi(payload);

        if (response.error !== null) {
            return response.data;
        }
        return rejectWithValue(response.error);
    }
);


const initialState = {
    status: STATE_STATUS.idle,
    message: '',
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    data: {},
}

const authSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action) => {
            state.lastName = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(resolveLogin.pending, (state) => {
            state.status = STATE_STATUS.loading;
        });

        builder.addCase(resolveLogin.fulfilled, (state, { payload }) => {
            if (payload?.data) {
                state.status = STATE_STATUS.success;
                state.data = payload.data;
            } else {
                state.status = STATE_STATUS.error;
                state.message = payload.Exception ?? payload.message;
            }
        });

        builder.addCase(resolveLogin.rejected, (state) => {
            state.status = STATE_STATUS.error;
            state.message = 'Username atau Password yang anda masukkan salah';
        });

        builder.addCase(resolveRegister.pending, (state) => {
            state.status = STATE_STATUS.loading;
        });

        builder.addCase(resolveRegister.fulfilled, (state, { payload }) => {
            if (payload?.data) {
                state.status = STATE_STATUS.success;
                state.data = payload.data;
            } else {
                state.status = STATE_STATUS.error;
                state.message = payload.Exception ?? payload.message;
            }
        });

        builder.addCase(resolveRegister.rejected, (state) => {
            state.status = STATE_STATUS.error;
            state.message = 'Username atau Password yang anda masukkan salah';
        });
    },
});

export const {
    setUsername,
    setPassword,
    setFirstName,
    setLastName,
} = authSlice.actions;

export default authSlice.reducer;