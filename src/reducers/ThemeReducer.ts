import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { THEMES } from "../common";

interface ThemeStateValue {
    theme: string;
}

interface ThemeState {
    value: ThemeStateValue;
}

const initialState = { value: { theme: THEMES.LIGHT } } as ThemeState;

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        saveTheme: (state: ThemeState, action: PayloadAction<ThemeStateValue>) => {
            state.value = action.payload;
        },
        resetTheme: (state: ThemeState) => {
            state.value = initialState.value;
        }
    },
});

export const { saveTheme, resetTheme } = themeSlice.actions;
