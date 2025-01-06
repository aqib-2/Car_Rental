import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mainScreen: 'dashboard'
}


const adminSlice = createSlice({
    name:'admin',
    initialState,
    reducers:{
        setMainScreen:(state,action) => {
            state.mainScreen = action.payload;
        },
    }
});

export const { setMainScreen } = adminSlice.actions;
export default adminSlice.reducer;