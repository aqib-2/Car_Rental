import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginEmail: "",
    loginPassword : "",
    emailError : false,
    passError : false
}


const loginSlice = createSlice({
    name:'loginSlice',
    initialState,
    reducers:{
        setEmail:(state,action) => {
            state.loginEmail = action.payload;
        },
        setPassword:(state,action) => {
            state.loginPassword = action.payload;
        },
        setEmailError:(state,action) => {
            state.emailError = action.payload;
        },
        setPassError:(state,action) => {
            state.passError = action.payload;
        },

    }
})

export const { setEmail,setPassword,setEmailError,setPassError } = loginSlice.actions;
export default loginSlice.reducer;