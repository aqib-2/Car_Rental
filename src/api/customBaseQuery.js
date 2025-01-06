import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const customBaseQuery = (props) => {
  const baseQuery = fetchBaseQuery({ ...props });
  const fn = async (args, api, extraOptions) => {
    api.dispatch({
      type: "loader/setLoader",
      payload: { isLoading: true, isError: false, error: "" },
    });
    const result = (await baseQuery(args, api, extraOptions));
    if (result.error) {
      if (result.error.status !== 401) {
        console.log('result in if not 401')
      } else {
        console.log('result if 401')
      }
    }
    return result;
  };
  return fn;
};

export default customBaseQuery;