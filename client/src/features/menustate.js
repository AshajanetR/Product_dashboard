import { createSlice } from "@reduxjs/toolkit";


const initialState = { value: false }; 

export const dutyState = createSlice({
    name: "duty",
    initialState,  
    reducers: {
        handleClick: (state) => {
            state.value = !state.value;  
        },
    },
});

export default dutyState.reducer;
export const { handleClick } = dutyState.actions;
