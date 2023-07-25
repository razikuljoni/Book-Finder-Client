import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import userSlice from "./user/userSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
