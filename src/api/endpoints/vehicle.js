import api from '../createApi'

export const vehicleApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createVehicle: builder.mutation({
      query: (payload) => ({
        url: "/vehicle/create",
        method: "POST",
        body: payload,
      }),
    }),
    getAllVehicles:builder.query({
      query: () => ({
        url: `/vehicle/getAll`,
        method:'GET'
      })
    }),
    getVehicleById:builder.query({
      query: (id) => ({
          url: `/vehicle/getById`,
          method:'GET',
          params: {id}
      })
    }),
    editVehicleById: builder.mutation({
      query: ({ id, body }) => {
        return {
          url: `/vehicle/editById?id=${id}`,
          method: "PUT",
          body,
        };
      },
    }),
  }),
});
    
export const {useCreateVehicleMutation,useGetAllVehiclesQuery,useLazyGetAllVehiclesQuery,useLazyGetVehicleByIdQuery,useEditVehicleByIdMutation} = vehicleApi;