import React, { useState, useEffect } from "react";
import UserHeader from "./UserHeader";
import InputField from "../../../ReusableComponents/InputFeild";
import { calendarIcon, locationIcon } from "../../../Home-Components/assets";
import Button from "../../../ReusableComponents/Button";
import { useGetAllLocationsQuery } from "../../../../api/endpoints/location";
import { useDispatch, useSelector } from "react-redux";
import {
  setAvailableCars,
  setSelectedCar,
  setSelectedFromDate,
  setSelectedLocation,
  setSelectedtToDate,
} from "../../../../store/slices/dashboardSlice";
import { useLazyGetAvailableCarsQuery } from "../../../../api/endpoints/booking";
import { openDialog } from "../../../../store/slices/dialogSlice";
import { soldOut } from "../../../../assets";

const UserDashboard = () => {
  const dispatch = useDispatch();

  const [locationOptions, setLocationOptions] = useState([]);
  const [searchClicked,setSearchClicked] = useState(false);
  const { selectedLocation, selectedFromDate, selectedToDate, availableCars, allLocations } = useSelector((state) => state.root.dashboard);

  useGetAllLocationsQuery({}, { refetchOnMountOrArgChange: true });
  const [getAvailableCars] = useLazyGetAvailableCarsQuery();

  const handleRent = (id) => {
   const selectedCarDetails = availableCars.find((car) => car._id === id);
   dispatch(setSelectedCar(selectedCarDetails));
    dispatch(
      openDialog({
        title: 'Confirm your booking details',
        content: 'carDetails',
      })
    )
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "location") {
      dispatch(setSelectedLocation(value));
    } else if (name === "fromDate") {
      dispatch(setSelectedFromDate(value));
      dispatch(setSelectedtToDate(''));
    } else {
      dispatch(setSelectedtToDate(value));
    }
  };

  const getBtnDisabled = () => {
    return (
      selectedLocation === "" ||
      selectedFromDate === "" ||
      selectedToDate === ""
    );
  };

  const handleSearch = async () => {
    setSearchClicked(true);
    if (!getBtnDisabled()) {
      try {
        const location = allLocations.find(
          (loc) => loc.name === selectedLocation
        );
        const payload = {
          locId: location._id ?? "",
          fromDate: selectedFromDate,
          toDate: selectedToDate,
        };
        const response = await getAvailableCars(payload).unwrap();
        if (response.statusCode === 200) {
          dispatch(setAvailableCars(response.data));
        }
      } catch (e) {
        console.error(e);
      }
    }
  };

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (allLocations.length > 0) {
      const options = allLocations
        ? allLocations.map((opt) => opt.name)
        : [];
      setLocationOptions(options);
      dispatch(setSelectedLocation(options[0]));
    }
  }, [allLocations]);

  return (
    <div>
      <UserHeader />

      <div className="w-11/12 mx-auto border rounded-xl">
        <div className="w-full flex flex-row justify-between items-center p-4 pt-0 bg-white shadow-md rounded-lg">
          <div className="w-1/4">
            <InputField
              label="Location"
              icon={locationIcon}
              name="location"
              type="select"
              placeholder="Enter location"
              value={selectedLocation}
              options={locationOptions}
              onChange={handleChange}
            />
          </div>

          <div className="w-1/4">
            <InputField
              label="From Date"
              icon={calendarIcon}
              name="fromDate"
              type="date"
              value={selectedFromDate}
              onChange={handleChange}
              min={today}
            />
          </div>
          <div className="w-1/4">
            <InputField
              label="To Date"
              icon={calendarIcon}
              name="toDate"
              type="date"
              value={selectedToDate}
              onChange={handleChange}
              min={selectedFromDate || today}
            />
          </div>
          <div className="mt-auto mb-1 w-1/5">
            <Button
              text={"Search"}
              width={"w-full"}
              onClickHandler={handleSearch}
              disabled={getBtnDisabled()}
            />
          </div>
        </div>
      </div>

      <div className="my-5 space-y-5">
        {
          !searchClicked && 
          <p className="text-center text-4xl text-reddish font-bold mt-40">"Drive Your Journey – Explore, Rent, and Go!"</p>
        }
        {availableCars.map((car) => (
          <div className="w-11/12 mx-auto border rounded-xl" key={car._id}>
            <AvailableCar car={car} handleRent={handleRent}/>
          </div>
        ))}
        {(availableCars.length === 0 && searchClicked ) && 
        (<div className="mt-10 w-full flex flex-col justify-center items-center">
          <img
            src={soldOut}
            alt="soldOut"
            className="w-1/2"
          />
          <p className="text-reddish my-5 font-semibold w-2/3 text-center text-2xl">Out of cars for your dates—guess everyone had the same great idea!</p>
          </div>)}
      </div>
    </div>
  );
};

export default UserDashboard;

const AvailableCar = (props) => {
  return (
    <div
      key={props.car._id}
      className="flex flex-row items-start bg-gray-100 p-4 shadow-md rounded-lg w-full"
    >
      <img
        src={props.car.imageUrlOne}
        alt={props.car.name}
        className="w-40 h-32 object-cover rounded-lg mr-4"
      />
      <div className="grid grid-cols-3 gap-3  mx-3  justify-between flex-1 my-auto">
          <h3 className="text-2xl font-bold mb-2">{props.car.carName}</h3>
          <p className="text-md text-gray-600"><span className="font-semibold">Brand:</span> {props.car.carBrand}</p>
          <p className="text-md text-gray-600">
          <span className="font-semibold">Transmission:</span> {props.car.transmissionType}
          </p>
          <p className="text-md text-gray-600">
          <span className="font-semibold">Fuel Type:</span> {props.car.fuelType}
          </p>
          <p className="text-md text-gray-600">
          <span className="font-semibold">Model Year:</span> {props.car.modelYear}
          </p>
          <p className="text-md text-gray-600">
          <span className="font-semibold">Price:</span> {props.car.rentalPrice}/day
          </p>
      </div>
      <Button text={`Rent for ${props.car.totalPrice}`} width={'w-2/12 my-auto'} onClickHandler={() => props.handleRent(props.car._id)}/>
    </div>
  );
};
