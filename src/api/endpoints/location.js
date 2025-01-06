import api from '../createApi'

export const locationApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createLocation: builder.mutation({
      query: (payload) => ({
        url: "/location/create",
        method: "POST",
        body: payload,
      }),
    }),
    getAllLocations:builder.query({
      query: () => ({
        url: `/location/getAll`,
        method:'GET'
      })
    }),
    getLocationById:builder.query({
      query: (id) => ({
          url: `/location/getById`,
          method:'GET',
          params: {id}
      })
    }),
    editLocationById: builder.mutation({
      query: ({ id, body }) => {
        return {
          url: `/location/editById?id=${id}`,
          method: "PUT",
          body,
        };
      },
    }),
  }),
});
    
export const {useCreateLocationMutation,useGetAllLocationsQuery,useLazyGetAllLocationsQuery,useLazyGetLocationByIdQuery,useEditLocationByIdMutation} = locationApi;