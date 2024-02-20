import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "./user.interface";
import { signup, signin, logout, checkAuth } from "./user.actions";
import { getLocal } from "@/utils/localStorageUtil";

const initialState: IInitialState = {
    user: getLocal('user'),
    isLoading: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(signup.pending, state => {
            state.isLoading = true;
        })
        .addCase(signup.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.user = payload.user;
        })
        .addCase(signup.rejected, state => {
            state.isLoading = false;
            state.user = null;
        })
        .addCase(signin.pending, state => {
            state.isLoading = true;
        })
        .addCase(signin.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.user = payload.user;
        })
        .addCase(signin.rejected, state => {
            state.isLoading = false;
            state.user = null;
        })
        .addCase(logout.fulfilled, state => {
            state.isLoading = false;
            state.user = null;
        })
        .addCase(checkAuth.fulfilled, (state, { payload }) => {
            state.user = payload.user;
        });
    },
})