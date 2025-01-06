import { createSlice } from "@reduxjs/toolkit";
import { locationApi } from "../../api/endpoints/location";

const initialState = {
    selectedLocation: '',
    selectedFromDate: '',
    selectedToDate: '',
    availableCars:[],
    selectedCar: null,
    allLocations: [],
}


const dashboardSlice = createSlice({
    name:'dashboard',
    initialState,
    reducers:{
        setSelectedLocation:(state,action) => {
            state.selectedLocation = action.payload;
        },
        setSelectedFromDate:(state,action) => {
            state.selectedFromDate = action.payload;
        },
        setSelectedtToDate:(state,action) => {
            state.selectedToDate = action.payload;
        },
        setAvailableCars:(state,action) => {
            state.availableCars = action.payload;
        },
        setSelectedCar:(state,action) => {
            state.selectedCar = action.payload;
        },
    },
    extraReducers:(builder) => {
        builder.addMatcher(
            locationApi.endpoints.getAllLocations.matchFulfilled,
            (state,action) => {
                const data = action.payload?.data
                state.allLocations = data || [];
            }
        )
    }
});

export const { setSelectedLocation,setSelectedFromDate,setSelectedtToDate,setAvailableCars,setSelectedCar} = dashboardSlice.actions;
export default dashboardSlice.reducer;