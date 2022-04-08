import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const videosApi = createApi({
  reducerPath: "videosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.jsonbin.io/b/5ef409df2406353b2e0c4068"
  }),
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => `/`
    })
  })
});

export const { useGetVideosQuery } = videosApi;
