import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations"

export const INIT_STATE = 
{
    user:null,
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    isError: false,
}

export const authSlice = createSlice({
    name: "auth",
    initialState: INIT_STATE,
    extraReducers: (builder) => {
        builder 
            .addCase(register.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.user = action.payload;
            })
            .addCase(logout.fulfilled, () => {
        return INIT_STATE;
        })

        .addMatcher((action)=> action.type.endsWith('pending'),handlePending)
        .addMatcher((action)=> action.type.endsWith('fulfilled'),handleFulfilled)
        .addMatcher((action)=> action.type.endsWith('rejected'),handleRejected)
    }
})

const handlePending = state => {
    state.isLoading = true;
    state.isError = false;
}
const handleFulfilled = state => {
    state.isLoading = false;
}

const handleRejected = (state, action) => {
    state.isLoggedIn = false;
    state.isLoading = false;
    state.isError = action.payload;
}

export const authReducer = authSlice.reducer;