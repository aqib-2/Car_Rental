import api from '../createApi'

export const loginApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (payload) => ({
        url: "/auth/register",
        method: "POST",
        body: payload,
      }),
    }),
    loginUser: builder.mutation({
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),
    }),
    logoutUser:builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method:'POST'
      })
    }),
  }),
});
    
export const {useRegisterMutation,useLoginUserMutation,useLogoutUserMutation} = loginApi