import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

export const makeReduxStore = (options) => {
    const store = configureStore(options)

    return store
}

export const store = configureStore({
    reducer: rootReducer,
});
