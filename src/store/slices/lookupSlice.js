import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    locationName:'',
    locationDescription:'',
    isEnabled:false,
    editLocation:false,
    locationId:'',
    allLocationsData:[],
    carName : '',
    carBrand: '',
    modelYear: '',
    transmissionType : 'manual',
    fuelType : 'petrol',
    carLocations : [],
    rentalPrice: 0,
    isActive: true,
    isCarEnabled: true,
    editVehicle : false,
    carImageOne:'',
    carImageTwo:'',
    vehicleId : '',
    allVehiclesData:[],
}


const lookupSlice = createSlice({
    name:'lookupSlice',
    initialState,
    reducers:{
        setLocationName:(state,action) => {
            state.locationName = action.payload;
        },
        setLocationDescription:(state,action) => {
            state.locationDescription = action.payload;
        },
        setIsEnabled:(state,action) => {
            state.isEnabled = action.payload;
        },
        setEditLocation:(state,action) => {
            state.editLocation = action.payload;
        },
        setLocationId:(state,action) => {
            state.locationId = action.payload;
        },
        setAllLocationsData:(state,action) => {
            state.allLocationsData = action.payload;
        },
        setAllLocationsData:(state,action) => {
            state.allLocationsData = action.payload;
        },
        setCarName(state, action) {
            state.carName = action.payload;
        },
        setCarBrand(state, action) {
            state.carBrand = action.payload;
        },
        setModelYear(state, action) {
            state.modelYear = action.payload;
        },
        setTransmissionType(state, action) {
            state.transmissionType = action.payload;
        },
        setFuelType(state, action) {
            state.fuelType = action.payload;
        },
        setCarLocations(state, action) {
            state.carLocations = action.payload;
        },
        setRentalPrice(state, action) {
            state.rentalPrice = action.payload;
        },
        setIsCarEnabled(state, action) {
            state.isCarEnabled = action.payload;
        },
        setIsActive(state, action) {
            state.isActive = action.payload;
        },
        setEditVehicle(state, action) {
            state.editVehicle = action.payload;
        },
        setVehicleId(state, action) {
            state.vehicleId = action.payload;
        },
        setAllVehiclesData(state, action) {
            state.allVehiclesData = action.payload;
        },
        setCarImageOne(state, action) {
            state.carImageOne = action.payload;
        },
        setCarImageTwo(state, action) {
            state.carImageTwo = action.payload;
        },
        resetState: (state) => {
            state.carName = '';
            state.carBrand = '';
            state.modelYear = '';
            state.transmissionType = 'manual';
            state.fuelType = 'petrol';
            state.carLocations = [];
            state.rentalPrice = 0;
            state.isActive = true;
            state.isCarEnabled = false;
            state.editVehicle = false;
            state.vehicleId = '';
            state.carImageOne = '';
            state.carImageTwo = '';
        },
    }
});

export const { setLocationName,setLocationDescription,setIsEnabled,setEditLocation,setLocationId,setAllLocationsData, setCarName, setCarBrand,setModelYear,setTransmissionType,setFuelType,setCarLocations,setRentalPrice,setIsCarEnabled,setIsActive,setEditVehicle,setVehicleId,setAllVehiclesData,setCarImageOne,setCarImageTwo,resetState } = lookupSlice.actions;
export default lookupSlice.reducer;