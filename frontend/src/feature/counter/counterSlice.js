import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

const counterSlice = createSlice({
    name: 'Counter',
    initialState: initialState,
    reducers: {
        increment(state) {
            state.value++;
        },

    }
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;