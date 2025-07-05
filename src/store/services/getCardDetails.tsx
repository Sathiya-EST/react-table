import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://jsonplaceholder.typicode.com";

export const cardApi = createApi({
  reducerPath: "cardApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllCards: builder.query({
      query: () => "/posts",
    }),
  }),
});

export const { useGetAllCardsQuery } = cardApi;
