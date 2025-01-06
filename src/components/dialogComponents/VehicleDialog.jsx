import React, { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import InputField from "../ReusableComponents/InputFeild";
import { useDispatch, useSelector } from "react-redux";
import { closeDialog } from "../../store/slices/dialogSlice";
import {
  setAllVehiclesData,
  setEditVehicle,
  setIsActive,
  setIsCarEnabled,
  setCarName,
  setCarBrand,
  setModelYear,
  setTransmissionType,
  setFuelType,
  setCarLocations,
  setRentalPrice,
  setVehicleId,
  setCarImageOne,
  setCarImageTwo,
  resetState,
} from "../../store/slices/lookupSlice";
import Button from "../ReusableComponents/Button";
import {
  useCreateVehicleMutation,
  useEditVehicleByIdMutation,
  useLazyGetAllVehiclesQuery,
} from "../../api/endpoints/vehicle";
import { toast } from "react-toastify";
import { carIcon, calendarIcon, locationIcon } from "../Home-Components/assets";
import { RupeeIcon,FuelIcon,PhotoIcon,EngineIcon } from "../../assets";
import MultiSelectDropdown from "../ReusableComponents/MultiSelectDropdown";
import { useGetAllLocationsQuery } from "../../api/endpoints/location";

const VehicleDialog = () => {
  const {
    carName,
    carBrand,
    modelYear,
    transmissionType,
    fuelType,
    carLocations,
    rentalPrice,
    isActive,
    isCarEnabled,
    editVehicle,
    vehicleId,
    carImageOne,
    carImageTwo
  } = useSelector((state) => state.root.lookup);

  const dispatch = useDispatch();
  const [createVehicle] = useCreateVehicleMutation();
  const [editVehicleById] = useEditVehicleByIdMutation();
  const [getAllVehicles] = useLazyGetAllVehiclesQuery();
  const {data:locationData,isSuccess:locationsSuccess} = useGetAllLocationsQuery({}, {refetchOnMountOrArgChange: true});

  const [locationOptions, setLocationOptions] = useState([]);

  const handleSelectionChange = (selected) => {
    dispatch(setCarLocations(selected));
  };

  const cancelHandler = () => {
    dispatch(resetState());
    dispatch(closeDialog());
  };

  const updateVehicles = async () => {
    try {
      const response = await getAllVehicles().unwrap();
      if (response.statusCode === 200) {
        dispatch(setAllVehiclesData(response.data));
      }
    } catch (e) {
      dispatch(setAllVehiclesData([]));
      toast.error("Vehicles API failed");
      console.error(e);
    }
  };

  const getBtnDisabled = () => {
    return  carName.trim() === "" ||
    carBrand.trim() === "" ||
    modelYear.trim() === "" ||
    rentalPrice === 0 || 
    carLocations.length === 0 || 
    carImageOne.trim() === '' || 
    carImageTwo.trim() === ''
  }

  const saveVehicle = async () => {
    if (!getBtnDisabled()) {
      const vehicleData = {
        carName,
        carBrand,
        modelYear,
        transmissionType,
        fuelType,
        carLocations,
        rentalPrice,
        isActive,
        imageUrlOne : carImageOne,
        imageUrlTwo: carImageTwo,
        isEnabled : isCarEnabled,
      };
      try {
        if (editVehicle) {
          const response = await editVehicleById({
            id: vehicleId,
            body: vehicleData,
          }).unwrap();
          if (response.statusCode === 200) {
            toast.success(response.message);
            cancelHandler();
            updateVehicles();
          }
        } else {
          const response = await createVehicle(vehicleData).unwrap();
          if (response.statusCode === 201) {
            toast.success(response.message);
            cancelHandler();
            updateVehicles();
          }
        }
      } catch (e) {
        console.error(e, "Error");
        toast.error(e.data.message ?? "Something went wrong");
      }
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    switch (name) {
      case "carName":
        dispatch(setCarName(value));
        break;
      case "carBrand":
        dispatch(setCarBrand(value));
        break;
      case "modelYear":
        dispatch(setModelYear(value));
        break;
      case "rentalPrice":
        dispatch(setRentalPrice(Number(value)));
        break;
      case "transmissionType":
        dispatch(setTransmissionType(value));
        break;
      case "fuelType":
        dispatch(setFuelType(value));
        break;
      case "carImageOne":
        dispatch(setCarImageOne(value));
        break;
      case "carImageTwo":
        dispatch(setCarImageTwo(value));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
   if(locationsSuccess){
    const locations = locationData.data.map((item) => ({...item,id:item._id}))
    setLocationOptions(locations);
   }
  },[locationData,locationsSuccess])

  return (
    <div className="h-[70vh] overflow-y-auto -mr-4">
      <div className="mr-2">
        <InputField
          label="Car Model"
          icon={carIcon}
          type="text"
          name="carName"
          placeholder="Enter car model"
          value={carName}
          onChange={(e) => handleChange(e)}
        />

        <InputField
          label="Manufacturing Brand"
          icon={carIcon}
          type="text"
          name="carBrand"
          placeholder="Enter manufacturing brand"
          value={carBrand}
          onChange={(e) => handleChange(e)}
        />

        <InputField
          label="Model Year"
          icon={calendarIcon}
          type="text"
          name="modelYear"
          placeholder="Enter model year"
          value={modelYear}
          onChange={(e) => handleChange(e)}
        />

        <InputField
          label="Transmission Type"
          icon={EngineIcon}
          type="select"
          name="transmissionType"
          placeholder="Select transmission type"
          value={transmissionType}
          onChange={(e) => handleChange(e)}
          options={['manual', 'automatic']}
        />

        <InputField
          label="Fuel Type"
          icon={FuelIcon}
          type="select"
          name="fuelType"
          placeholder="Select fuel type"
          value={fuelType}
          onChange={(e) => handleChange(e)}
          options={['petrol', 'diesel']}
        />

        <MultiSelectDropdown
          options={locationOptions}
          selectedOptions={carLocations}
          onChange={handleSelectionChange}
          placeholder="Choose your options"
          label="Select Available locations"
          icon={locationIcon}
        />

        <InputField
          label="Rental Price"
          icon={RupeeIcon}
          type="number"
          name="rentalPrice"
          placeholder="Enter rental price"
          value={rentalPrice}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          label="Car Image 1"
          icon={PhotoIcon}
          type="string"
          name="carImageOne"
          placeholder="Enter Image URL"
          value={carImageOne}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          label="Car Image 2"
          icon={PhotoIcon}
          type="string"
          name="carImageTwo"
          placeholder="Enter Image URL"
          value={carImageTwo}
          onChange={(e) => handleChange(e)}
        />

        <div className="flex items-center my-4">
          <Switch
            checked={isCarEnabled}
            onChange={() => dispatch(setIsCarEnabled(!isCarEnabled))}
            className={`${
                isCarEnabled ? "bg-blue-600" : "bg-gray-200"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enabled</span>
            <span
              className={`${
                isCarEnabled ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
          <span className="ml-3 text-sm font-semibold">
            {isCarEnabled ? "Enabled" : "Disabled"}
          </span>
        </div>

        <div className="flex justify-between">
          <Button
            onClickHandler={cancelHandler}
            width={"w-fit px-5 py-2"}
            text="Cancel"
          />
          <Button
            onClickHandler={saveVehicle}
            width={"w-fit px-5 py-2"}
            text={editVehicle ? "Update" : "Save"}
            disabled={getBtnDisabled()}
          />
        </div>
      </div>
    </div>
  );
};

export default VehicleDialog;
