import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "../stores/auth/login/login.reducer";
import jobsReducer from "../stores/jobs/jobs.reducer";

export const rootReducer = combineReducers({
    login: loginReducer,
    jobs: jobsReducer,
});