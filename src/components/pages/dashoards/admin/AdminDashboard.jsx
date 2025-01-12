import React, { useEffect, useRef, useState } from "react";
import AdminHeader from "./AdminHeader";
import { useSelector } from "react-redux";
import LookUps from "./LookUps";
import {
  useGetBookingsDataQuery,
  useGetDashboardDataQuery,
  useLazyGetBookingsDataQuery,
} from "../../../../api/endpoints/booking";

import { toast } from "react-toastify";
import { useGetAllLocationsQuery } from "../../../../api/endpoints/location";

const AdminDashboard = () => {
  const { mainScreen } = useSelector((state) => state.root.admin);
  const { data: dashboardData } = useGetDashboardDataQuery();
  const { data: bookingData, isSuccess: bookingSuccess } =
    useGetBookingsDataQuery();
  const [getBookingData] = useLazyGetBookingsDataQuery();
  const { data: locationData, isSuccess: locationSuccess } =
    useGetAllLocationsQuery({}, { refetchOnMountOrArgChange: true });

  const [globalFilter, setGlobalFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [tableData, setTableData] = useState([]);
  const [locations, setLocations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const debounceTimeout = useRef();

  const handleBookingData = async (filter, location, page) => {
    try {
      const payload = {
        search: filter,
        locationId: location,
        page,
      };
      const response = await getBookingData(payload).unwrap();
      if (response?.statusCode === 200) {
        setTableData(response?.data?.bookings);
        setTotalPages(response?.data?.totalPages);
      }
    } catch (e) {
      toast.error("data fetch failed");
    }
  };

  const debounceApiCall = (filter, location) => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = window.setTimeout(
      () => handleBookingData(filter, location),
      800
    );
  };

  const handleGlobalFilterChange = (value) => {
    setGlobalFilter(value);
    debounceApiCall(value, locationFilter);
  };

  const handleLocationFilterChange = (value) => {
    setLocationFilter(value);
    debounceApiCall(globalFilter, value);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    handleBookingData(globalFilter, locationFilter, currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (bookingSuccess) {
      setTableData(bookingData?.data?.bookings ?? []);
    }
  }, [bookingSuccess, bookingData]);
  useEffect(() => {
    if (locationSuccess) {
      setLocations(locationData?.data ?? []);
    }
  }, [locationSuccess, locationData]);
  return (
    <>
      <AdminHeader />
      {mainScreen === "lookups" ? (
        <LookUps />
      ) : (
        <>
          <div className="w-11/12 mx-auto flex space-x-5">
            <div className="bg-slate-200 p-2 rounded-md shadow-lg w-40">
              <h1>Total Locations</h1>
              <p>{dashboardData?.data.locations ?? 0}</p>
            </div>
            <div className="bg-slate-200 p-2 rounded-md shadow-lg w-40">
              <h1>Total Cars</h1>
              <p>{dashboardData?.data.cars ?? 0}</p>
            </div>
            <div className="bg-slate-200 p-2 rounded-md shadow-lg w-40">
              <h1>Total Bookings</h1>
              <p>{dashboardData?.data.bookings ?? 0}</p>
            </div>
            <div className="bg-slate-200 p-2 rounded-md shadow-lg w-40">
              <h1>Total Revenue</h1>
              <p>₹ {dashboardData?.data.totalRevenue ?? 0}</p>
            </div>
          </div>

          <div>
            <div className="p-4">
              <div className="flex w-[95%] mx-auto justify-between mb-4">
                <input
                  type="text"
                  className="border p-2"
                  placeholder="Search by Booking ID"
                  value={globalFilter}
                  onChange={(e) => handleGlobalFilterChange(e.target.value)}
                />

                <select
                  className="border p-2"
                  value={locationFilter}
                  onChange={(e) => handleLocationFilterChange(e.target.value)}
                >
                  <option value="">All Locations</option>
                  {locations?.length > 0 ? (
                    locations.map((loc) => (
                      <option value={loc?._id}>{loc?.name}</option>
                    ))
                  ) : (
                    <option value="" disabled>
                      No Options
                    </option>
                  )}
                </select>
              </div>

              <div className="w-[95%] mx-auto overflow-x-auto">
                <table className="table-auto w-full border border-gray-300">
                  <thead>
                    <tr>
                      <th className="border-r-2 p-1">Booking ID</th>
                      <th className="border-r-2 p-1">Car Name</th>
                      <th className="border-r-2 p-1">Location</th>
                      <th className="border-r-2 p-1">Customer Name</th>
                      <th className="border-r-2 p-1">From Date</th>
                      <th className="border-r-2 p-1">To Date</th>
                      <th className="border-r-2 p-1">Total Amount</th>
                      <th className="border-r-2 p-1">Status</th>
                      <th className="border-r-2 p-1">Payment Id</th>
                      <th className="p-1">Booked On</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.length > 0 ? (
                      tableData.map((booking) => (
                        <tr key={booking._id} className="border-t">
                          <td className="border-r-2 p-1 text-center">
                            {booking._id}
                          </td>
                          <td className="border-r-2 p-1 text-center">
                            {booking.carId.carName}
                          </td>
                          <td className="border-r-2 p-1 text-center">
                            {booking.locationId.name}
                          </td>
                          <td className="border-r-2 p-1 text-center">
                            {booking.customerId.name}
                          </td>
                          <td className="border-r-2 p-1 text-center">
                            {new Date(booking.fromDate).toLocaleString()}
                          </td>
                          <td className="border-r-2 p-1 text-center">
                            {new Date(booking.toDate).toLocaleString()}
                          </td>
                          <td className="border-r-2 p-1 text-center">
                            {booking.totalAmount}
                          </td>
                          <td className="border-r-2 p-1 text-center">
                            {booking.status}
                          </td>
                          <td className="border-r-2 p-1 text-center">
                            {booking.paymentId}
                          </td>
                          <td className="p-1 text-center">
                            {new Date(booking.createdAt).toLocaleString()}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={10} className="text-center p-2 border-t-2">
                          No data available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="w-11/12 mx-auto mt-4 flex justify-between items-center">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className={`border px-4 py-2 ${
                    currentPage === 1 && "bg-gray-200 text-gray-500"
                  }`}
                >
                  Previous
                </button>
                <p>
                  Page {currentPage} of {totalPages}
                </p>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`border px-4 py-2 ${
                    currentPage === totalPages && "bg-gray-200 text-gray-500"
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AdminDashboard;
