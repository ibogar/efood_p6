import { RestaurantType } from "@/pages/Home";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api-ebac.vercel.app/api/efood'
    }),
    endpoints: (builder) => ({
        getRestaurants: builder.query<RestaurantType[], void>({
            query: () => 'restaurantes'
        }),
        getSelectedRestaurant: builder.query<RestaurantType, string>({
            query: (id) => `restaurantes/${id}`
        })
    })
})


export const { useGetRestaurantsQuery, useGetSelectedRestaurantQuery } = api

export default api