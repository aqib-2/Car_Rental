import { configureStore } from "@reduxjs/toolkit";
import api from "../api/createApi";
import rootReducer from "./slices/rootReducer";

export const store = configureStore({
    reducer:{
        api: api.reducer,
        root: rootReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})