import React from 'react'
import UserHeader from './UserHeader'
import { useGetUserBookingsQuery } from '../../../../api/endpoints/booking'

const MyBookings = () => {
    const {data:bookingData,isError:bokkingError} = useGetUserBookingsQuery();
  return (
    <div>
      <UserHeader />

      <div className='px-10 py-5'>
        <h2 className='text-3xl font-bold'>Your recent Bookings</h2>
        <div className="rounded-xl border h-[65vh] mt-5 overflow-y-auto p-5">
        {bookingData?.data?.length > 0 ? (
          bookingData?.data.map((booking) => (
            <BookingCard key={booking.paymentId || booking.carId} booking={booking} />
          ))
        ) : (
          <p className="text-center text-gray-500 mt-10">No bookings found.</p>
        )}
      </div>
      </div>
    </div>
  )
}

export default MyBookings

const BookingCard = ({ booking }) => {
    return (
      <div className="border rounded-lg flex p-2 shadow-md mb-4">
        <img
          src={booking.carId.imageUrlOne}
          alt={booking.carId.carName}
          className="w-40 h-32 object-cover rounded-lg mr-4"
        />
        <div className='grid grid-cols-2 my-auto'>
        <h3 className="text-xl font-semibold">{booking.carId.carName || ""}</h3>
        
        <h3 className="text-sm"><strong>Booking ID:</strong> {booking.paymentId || 'N/A'}</h3>
        <p>{booking.locationId.name || ""}</p>
         
        <p className='text-sm'><strong>Total Amount:</strong> ₹{booking.totalAmount}</p>
        <p>{new Date(booking.fromDate).toLocaleDateString()} - {new Date(booking.toDate).toLocaleDateString()}</p> 
        <p className='text-sm'>
          <strong>Status:</strong>{' '}
          <span
            className={`px-2 uppercase py-1 rounded ${
              booking.status === 'confirmed'
                ? 'text-green-500'
                : booking.status === 'cancelled'
                ? 'text-red-500'
                : 'text-yellow-500'
            }`}
          >
            {booking.status}
          </span>
        </p>
        </div>
      </div>
    );
};