import usersReducer from "./usersSlice";
import {configureStore} from "@reduxjs/toolkit";
import loadersReducer from './loadersSlice';

const store = configureStore({
    reducer: {
        users: usersReducer,
        loaders: loadersReducer,
    },
});

export default store;