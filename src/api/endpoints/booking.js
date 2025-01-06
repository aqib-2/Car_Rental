import api from '../createApi'

export const bookingApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAvailableCars:builder.query({
      query: ({locId,fromDate,toDate}) => ({
          url: `/booking/getAvailableCars`,
          method:'GET',
          params: {locId,fromDate,toDate}
      })
    }),
    createBooking: builder.mutation({
      query: (payload) => ({
        url: "/booking/create",
        method: "POST",
        body: payload,
      }),
    }),
    createOrder: builder.mutation({
      query: (payload) => ({
        url: "/payment/create",
        method: "POST",
        body: payload,
      }),
    }),
    verifyOrder: builder.mutation({
      query: (payload) => ({
        url: "/payment/verify",
        method: "PUT",
        body: payload,
      }),
    }),
    getUserBookings:builder.query({
      query: () => ({
          url: `/booking/getuserbookings`,
          method:'GET'
      })
    }),
  }),
});
    
export const {useLazyGetAvailableCarsQuery,useCreateBookingMutation,useCreateOrderMutation,useVerifyOrderMutation,useGetUserBookingsQuery} = bookingApi;