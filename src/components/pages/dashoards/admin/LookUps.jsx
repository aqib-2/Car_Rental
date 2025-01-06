import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { openDialog } from '../../../../store/slices/dialogSlice';
import { useGetAllLocationsQuery, useLazyGetLocationByIdQuery } from '../../../../api/endpoints/location';
import { resetState, setAllLocationsData, setAllVehiclesData, setCarBrand, setCarImageOne, setCarImageTwo, setCarLocations, setCarName, setEditLocation, setEditVehicle, setFuelType, setIsActive, setIsCarEnabled, setIsEnabled, setLocationDescription, setLocationId, setLocationName, setModelYear, setRentalPrice, setTransmissionType, setVehicleId } from '../../../../store/slices/lookupSlice';
import { toast } from 'react-toastify';
import { useGetAllVehiclesQuery, useLazyGetVehicleByIdQuery } from '../../../../api/endpoints/vehicle';

const LookUps = () => {

  const dispatch= useDispatch();
  const {data:locationData,isSuccess:locationSuccess} = useGetAllLocationsQuery();
  const {data:vehicleData,isSuccess:vehicleSuccess} = useGetAllVehiclesQuery();
  const [getLocationById]= useLazyGetLocationByIdQuery();
  const [getVehicleById] = useLazyGetVehicleByIdQuery();
  const {allLocationsData,allVehiclesData} = useSelector(state => state.root.lookup);

  const handleLocationDialog = () => {
    dispatch(
      openDialog({
        title: 'Add Location',
        content: 'locationDialog',
      })
    );
  }

  const handleVehicleDialog = () => {
    dispatch(
      openDialog({
        title: 'Add Vehicle',
        content: 'vehicleDialog',
      })
    );
  }

  const handleOpenVehicle = () => {
    dispatch(resetState());
    handleVehicleDialog();
  }

  const handleEdit = async (id) => {
    try{
      const response = await getLocationById(id).unwrap();
      if(response.statusCode === 200 ){
        dispatch(setLocationName(response.data.name));
        dispatch(setLocationDescription(response.data.description));
        dispatch(setIsEnabled(response.data.isEnabled));
        dispatch(setEditLocation(true));
        dispatch(setLocationId(id));
        handleLocationDialog();
      }
    }catch(e){
      console.error(e);
      toast.error('An error occured');
    }
  }

  const handleCarEdit = async (id) => {
    try{
      const response = await getVehicleById(id).unwrap();
      if(response.statusCode === 200 ){
        const car = response.data;
        dispatch(setCarName(car.carName));
        dispatch(setCarBrand(car.carBrand));
        dispatch(setModelYear(car.modelYear));
        dispatch(setTransmissionType(car.transmissionType));
        dispatch(setFuelType(car.fuelType));
        dispatch(setCarLocations(car.carLocations));
        dispatch(setRentalPrice(car.rentalPrice));
        dispatch(setIsActive(car.isActive));
        dispatch(setIsCarEnabled(car.isEnabled));
        dispatch(setEditVehicle(true));
        dispatch(setVehicleId(id));
        dispatch(setCarImageOne(car.imageUrlOne));
        dispatch(setCarImageTwo(car.imageUrlTwo));
        handleVehicleDialog();
      }
    }catch(e){
      console.error(e);
      toast.error('An error occured');
    }
  }

  useEffect(() => {
    if(locationSuccess){
      dispatch(setAllLocationsData(locationData?.data));
    }
    if(vehicleSuccess){
      dispatch(setAllVehiclesData(vehicleData?.data))
    }
  },[locationSuccess,vehicleSuccess,locationData,vehicleData])

  return (
    <div className="h-[70vh] flex flex-col items-center pb-5">
    <div className="w-[90%] grid grid-cols-2 gap-10">
      {/* Locations Section */}
      <div className="bg-gray-300 rounded-md flex flex-col">
        {/* Scrollable container */}
        <h2 className="text-xl font-bold m-5">Locations</h2>
        <div className="overflow-y-auto h-[60vh]">
          
          {allLocationsData && allLocationsData.map((location) => (
            <div key={location._id}>
              <LocationCard location={location} handleEdit={handleEdit}/>
            </div>
          ))}
        </div>
  
        {/* Fixed bottom button */}
        <div className="h-[10vh] flex items-center justify-center mx-4">
          <button className="w-full bg-black text-white py-2 rounded" onClick={handleLocationDialog}>
            Add Location
          </button>
        </div>
      </div>
  
      {/* Vehicles Section */}
      <div className="bg-gray-300 rounded-md h-full flex flex-col">
  {/* Scrollable container */}
  <h2 className="text-xl font-bold m-5">Vehicles</h2>
  <div className="overflow-y-auto h-[60vh]">
    {/* Vehicle Items */}
    {allVehiclesData && allVehiclesData.map((car) => (
      <div key={car._id}>
        <VehicleCard car={car} handleEdit={handleCarEdit}/>
      </div>
    ))}
  </div>
  {/* Fixed bottom button */}
  <div className="h-[10vh] flex items-center justify-center mx-4">
    <button
      className="w-full bg-black text-white py-2 rounded"
      onClick={handleOpenVehicle}
    >
      Add Vehicle
    </button>
  </div>
</div>

    </div>
  </div>
  
  )
}

export default LookUps

const LocationCard = (props) => {
    return (
        <div key={props.location._id} className="mb-4 mx-4 bg-white p-4 rounded-md shadow-md">
          <h3 className="font-bold">{props.location.name}</h3>
          <p>{props.location.description}</p>

          <div className="flex gap-2 mt-3">
            <button className="bg-gray-700 text-white px-3 py-1 rounded" onClick={() =>  props.handleEdit(props.location._id)}>Edit</button>
          </div>
        </div>
    )
} 

const VehicleCard = (props) => {
   return (
    <div
        key={props.car._id}
        className="mb-4 mx-4 bg-white p-4 rounded-md shadow-md"
      >
        {/* Vehicle Images */}
        <div className="flex gap-2">
          <img
            src={props.car.imageUrlOne}
            alt={`Vehicle - Image 1`}
            className="w-1/2 h-32 object-cover rounded"
          />
          <img
            src={props.car.imageUrlTwo}
            alt={`Vehicle - Image 2`}
            className="w-1/2 h-32 object-cover rounded"
          />
        </div>
        {/* Vehicle Details */}
        <h3 className="font-bold mt-3">{props.car.carName}</h3>
        <div className="grid grid-cols-2 gap-x-2 gap-y-1">
          <p><span className='font-semibold'>Brand:</span> {props.car.carBrand}</p>
          <p><span className='font-semibold'>Fuel Type:</span> {props.car.fuelType}</p>
          <p><span className='font-semibold'>Transmission:</span> {props.car.transmissionType}</p>
          <p><span className='font-semibold'>Model Year:</span> {props.car.modelYear}</p>
          <p><span className='font-semibold'>Rental Price:</span> ${props.car.rentalPrice}/Day</p>
        </div>
        <p><span className='font-semibold'>Available Locations:</span> {props.car.carLocations && props.car.carLocations.join(',')}</p>
        {/* Edit Button */}
        <button className="mt-3 bg-gray-700 text-white px-3 py-1 rounded" onClick={() =>  props.handleEdit(props.car._id)}>
          Edit
        </button>
      </div>
   )
}
