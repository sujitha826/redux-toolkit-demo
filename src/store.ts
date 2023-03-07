import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { themeSlice } from './reducers/ThemeReducer';
import { langSlice } from "./reducers/LanguageReducer";
import { fetchUsersSlice } from './reducers/FetchUsersReducer';

interface UserStateValue {
    username: string;
}

interface UserState {
    value: UserStateValue;
}

const initialState = { value: { username: "" } } as UserState;

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state: UserState, action: PayloadAction<UserStateValue>) => {
            state.value = action.payload;
        },

        logout: (state: UserState) => {
            state.value = initialState.value;
        },
    },
});

export const { login, logout } = userSlice.actions;

// reducer is the first key which has a value as an object in which each pair will represent a reducer function. 
export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        theme: themeSlice.reducer,
        lang: langSlice.reducer,
        fetchUsers: fetchUsersSlice.reducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
