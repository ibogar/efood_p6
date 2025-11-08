import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


interface PurchasePayload {
    products:Pick<ProductType, "id" | "preco">[],
    delivery:{
        receiver:string,
        address:{
            description:string,
            city:string,
            zipCode:string,
            number:number,
            complement:string
        }
    },
    payment:{
        card:{
            name:string,
            number:string,
            code:number,
            expires:{
                month:number,
                year:number
            }
        }
    }
}

interface PurchaseResponse {
    orderId: string
}


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
        }),
        purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
        query: (body) => ({
            url: 'checkout',
            method: 'POST',
            body
            })
        })
    })
})


export const { 
    useGetRestaurantsQuery, 
    useGetSelectedRestaurantQuery,
    usePurchaseMutation 
} = api

export default api