import React, { useState } from 'react';
import { Switch } from '@headlessui/react'; 
import InputField from '../ReusableComponents/InputFeild';
import { locationIcon } from '../Home-Components/assets';
import { useDispatch, useSelector } from 'react-redux';
import { closeDialog } from '../../store/slices/dialogSlice';
import { setAllLocationsData, setEditLocation, setIsEnabled, setLocationDescription, setLocationId, setLocationName } from '../../store/slices/lookupSlice';
import Button from '../ReusableComponents/Button';
import { useCreateLocationMutation, useEditLocationByIdMutation, useLazyGetAllLocationsQuery } from '../../api/endpoints/location';
import { toast } from 'react-toastify';


const LocationDialog = () => {

  const {locationName,locationDescription,isEnabled,editLocation,locationId} = useSelector(state => state.root.lookup)

  const dispatch = useDispatch();
  const [createLocation] = useCreateLocationMutation();
  const [editLocationById] = useEditLocationByIdMutation();
  const [getAllLocations] = useLazyGetAllLocationsQuery();

  const cancelHandler = () => {
    dispatch(setLocationName(''));
    dispatch(setLocationDescription(''));
    dispatch(setIsEnabled(false));
    dispatch(closeDialog());
    dispatch(setEditLocation(false));
    dispatch(setLocationId(''));
  };

  const updateLocations = async () => {
    try{
      const response = await getAllLocations().unwrap();
      if(response.statusCode === 200){
        dispatch(setAllLocationsData(response.data));
      }
    }catch(e){
      dispatch(setAllLocationsData([]));
      toast.error('Locaions api failed');
      console.error(e);
    }
  }

  const saveLocation = async () => {
    if(locationName.trim() !== '' || locationDescription.trim() !== ''){
        const locationData = {
            name : locationName,
            description : locationDescription,
            isEnabled
        };
        try{
          if(editLocation){
            const response = await editLocationById({ id: locationId, body: locationData }).unwrap();
            if(response.statusCode === 200){
             toast.success(response.message);
             cancelHandler();
             updateLocations();
            }
          }else{
            const response = await createLocation(locationData).unwrap();
            if(response.statusCode === 201){
             toast.success(response.message);
             cancelHandler();
             updateLocations();
            }
          }
        }catch(e){
            console.error(e,'aqib');
            toast.error(e.data.message ?? 'Something went wrong');
        }
    }  
  };

  const handleChange = (e) => {
    const {value,name} = e.target;
    if(name === 'locationName'){
      dispatch(setLocationName(value));
    }else if(name === 'locationDescription'){
      dispatch(setLocationDescription(value));
    }
  }

  return (
    <div>
        <InputField
            label="Location Name"
            icon={locationIcon}
            type="text"
            name="locationName"
            placeholder="Enter location name"
            value={locationName}
            onChange={(e) => handleChange(e)}
        />

        <InputField
            label="Location Description"
            icon={locationIcon}
            type="text"
            name="locationDescription"
            placeholder="Enter location description"
            value={locationDescription}
            onChange={(e) => handleChange(e)}
        />

        <div className="flex items-center my-4">
        <Switch
            checked={isEnabled}
            onChange={() => dispatch(setIsEnabled(!isEnabled))}
            className={`${
            isEnabled ? 'bg-blue-600' : 'bg-gray-200'
            } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
            <span className="sr-only">Enable Location</span>
            <span
            className={`${
                isEnabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
        </Switch>
        <span className="ml-3 text-sm font-semibold">
            {isEnabled ? 'Location Enabled' : 'Location Disabled'}
        </span>
        </div>

        <div className="flex justify-between">
        <Button
            onClickHandler={cancelHandler}
            width={'w-fit px-5 py-2'}
            text='Cancel'
        />
        <Button
            onClickHandler={saveLocation}
            width={'w-fit px-5 py-2'}
            text={editLocation ? 'Update' : 'Save'}
            disabled={locationName.trim() === '' || locationDescription.trim() === ''}
        />
        </div>
    </div>
  );
};

export default LocationDialog;
