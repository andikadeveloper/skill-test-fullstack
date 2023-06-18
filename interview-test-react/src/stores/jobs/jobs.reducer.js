import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATE_STATUS } from "../../utils/constants/stateStatus";
import { jobsDetailApi, jobsListApi } from "../../services/jobs/jobsService";

export const resolveGetJobsList = createAsyncThunk(
    'resolve/jobs/list',
    async (params, rejectWithValue) => {
        const response = await jobsListApi(params);

        if (response.error !== null) {
            return response.data;
        }

        return rejectWithValue(response.error);
    }
)

export const resolveGetJobsDetail = createAsyncThunk(
    'resolve/jobs/detail',
    async (id, rejectWithValue) => {
        const response = await jobsDetailApi(id);

        if (response.error !== null) {
            return response.data;
        }

        return rejectWithValue(response.error);
    }
)

const initialState = {
    jobsListStatus: STATE_STATUS.idle,
    jobsListMessage: '',
    jobsListData: [],
    params: {
        page: 1,
        location: '',
        description: '',
        fullTime: false,
    },
    jobsDetailStatus: STATE_STATUS.idle,
    jobsDetailMessage: '',
    jobsDetailData: {},
};

const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        setParams: (state, { payload }) => {
            state.params[payload.name] = payload.value;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(resolveGetJobsList.pending, (state) => {
            state.jobsListStatus = STATE_STATUS.loading;
        });

        builder.addCase(resolveGetJobsList.fulfilled, (state, { payload }) => {
            if (payload?.data) {
                state.jobsListStatus = STATE_STATUS.success;
                const data = payload.data.filter((j) => j !== null);

                state.jobsListData = data;
            } else {
                state.jobsListStatus = STATE_STATUS.error;
                state.jobsListMessage = payload.Exception ?? payload.message;
            }
        });

        builder.addCase(resolveGetJobsList.rejected, (state) => {
            state.jobsListStatus = STATE_STATUS.error;
            state.jobsListMessage = 'Gagal mendapatkan list job';
        });

        builder.addCase(resolveGetJobsDetail.pending, (state) => {
            state.jobsDetailStatus = STATE_STATUS.loading;
        });

        builder.addCase(resolveGetJobsDetail.fulfilled, (state, { payload }) => {
            if (payload?.data) {
                state.jobsDetailStatus = STATE_STATUS.success;
                state.jobsDetailData = payload.data;
            } else {
                state.jobsDetailStatus = STATE_STATUS.error;
                state.jobsDetailMessage = payload.Exception ?? payload.message;
            }
        });

        builder.addCase(resolveGetJobsDetail.rejected, (state) => {
            state.jobsDetailStatus = STATE_STATUS.error;
            state.jobsDetailMessage = 'Gagal mendapatkan detail job';
        });
    },
});

export const {
    setParams,
} = jobsSlice.actions;

export default jobsSlice.reducer;