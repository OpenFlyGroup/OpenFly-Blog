import { createAsyncThunk } from "@reduxjs/toolkit";
import { errorCatch } from "@/api/api.helper";
import { IAuthResponse, IEmailPassword } from "./user.interface";
import { removeFromStorage } from "@/services/auth/auth.helper";
import { AuthService } from "@/services/auth/auth.service";

export const signup = createAsyncThunk<IAuthResponse, IEmailPassword>(
    'auth/signup',
    async (data, thunkApi) => {
        try {
            const response = await AuthService.main('signup', data);
            return response;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);

export const signin = createAsyncThunk<IAuthResponse, IEmailPassword>(
    'auth/signin',
    async (data, thunkApi) => {
        try {
            const response = await AuthService.main('signin', data);
            return response;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async () => removeFromStorage()
);

export const checkAuth = createAsyncThunk<IAuthResponse>(
    'auth/check-auth',
    async (data, thunkApi) => {
        try {
            const response = await AuthService.getNewTokens();
            return response.data;
        } catch (error) {
            errorCatch(error) === 'jwt expired' ?
            thunkApi.dispatch(logout()) : null;
            return thunkApi.rejectWithValue(error);
        }
    }
)