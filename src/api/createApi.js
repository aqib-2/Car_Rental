import { createApi } from "@reduxjs/toolkit/query/react";
import customBaseQuery from "./customBaseQuery";
import { serviceUrl } from "../utils/apiconfig";
import { getLocalItem } from "../utils/helperFunctions";

const api = createApi({
  baseQuery: customBaseQuery({
    baseUrl: serviceUrl,
    prepareHeaders: (headers, { getState, endpoint }) => {
      headers.set("Accept", "application/json");
      headers.set("Content-Type", "application/json");
      const token = getLocalItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});

export default api;