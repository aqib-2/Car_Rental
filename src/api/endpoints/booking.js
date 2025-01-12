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
    cancelPayment:builder.mutation({
      query: (paymentId) => ({
          url: `/payment/cancel`,
          method:'PUT',
          params:{paymentId}
      })
    }),
    getDashboardData:builder.query({
      query: () => ({
          url: `/booking/getdashboarddata`,
          method:'GET'
      })
    }),
    getBookingsData:builder.query({
      query: (payload) => ({
          url: `/booking/getBookingData`,
          method:'GET',
          params :  {
            search : payload?.search ?? '',
            page : payload?.page ?? 1,
            locationId : payload?.locationId ?? ''
          }
        })
    }),
  }),
});
    
export const {useLazyGetAvailableCarsQuery,useCreateBookingMutation,useCreateOrderMutation,useVerifyOrderMutation,useGetUserBookingsQuery,useCancelPaymentMutation,useGetDashboardDataQuery,useGetBookingsDataQuery,useLazyGetBookingsDataQuery} = bookingApi;