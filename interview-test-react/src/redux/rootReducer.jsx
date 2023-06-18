import { combineReducers } from "@reduxjs/toolkit";
import jobsReducer from "../stores/jobs/jobs.reducer";
import authReducer from "../stores/auth/auth.reducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    jobs: jobsReducer,
});