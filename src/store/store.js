import {combineReducers, configureStore} from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";

const rootReducer = combineReducers({
    count: counterReducer,
});

export const createReduxStore = (initialState = {}) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState
    });
}