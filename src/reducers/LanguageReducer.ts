import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LanguageOptions } from "../common";

interface LanguageValue {
    lang: string;
}

interface LanguageState {
    value: LanguageValue;
}


const initialState = { value: { lang: LanguageOptions[0].text } } as LanguageState;

export const langSlice = createSlice({
    name: "lang",
    initialState,
    reducers: {
        langChange: (state: LanguageState, action: PayloadAction<LanguageValue>) => {
            state.value = action.payload;
        },
    },
});

export const { langChange } = langSlice.actions;
