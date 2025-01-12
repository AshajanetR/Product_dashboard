import { createSlice } from "@reduxjs/toolkit";


const initialState = { value: false }; 

export const formState = createSlice({
    name: "form",
    initialState, 
    reducers: {
        handleVisiblity: (state) => {
            state.value = !state.value; 
        },
    },
});

export default formState.reducer;
export const { handleVisiblity } = formState.actions;
