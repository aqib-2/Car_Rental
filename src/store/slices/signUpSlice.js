import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:"",
    email: "",
    password : "",
    confirmPassword:"",
    emailFormatError : false,
    passwordError : false,
    samePassword: false,
}


const signUpSlice = createSlice({
    name:'signUpSLice',
    initialState,
    reducers:{
        setName:(state,action) => {
            state.name = action.payload;
        },
        setEmail:(state,action) => {
            state.email = action.payload;
        },
        setPassword:(state,action) => {
            state.password = action.payload;
        },
        setConfirmPassword:(state,action) => {
            state.confirmPassword = action.payload;
        },
        setEmailError:(state,action) => {
            state.emailFormatError = action.payload;
        },
        setPasswordError:(state,action) => {
            state.passwordError = action.payload;
        },
        setSamePasswordError:(state,action) => {
            state.samePassword = action.payload;
        }
    }
})

export const { setName,setEmail,setPassword,setConfirmPassword,setEmailError,setPasswordError,setSamePasswordError } = signUpSlice.actions;
export default signUpSlice.reducer;