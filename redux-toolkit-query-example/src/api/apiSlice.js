import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuert({
    baseUrl: "http://localhost:3000",
  }),
  endpoint: (build) => ({
    getTasks: buildErrorMessage.query({
      query: () => "/tasks",
    }),
  }),
})
export const { useGetTasksQuery } = apislice
