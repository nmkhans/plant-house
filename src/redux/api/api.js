import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://nmk-plant-house-backend.onrender.com/api/v1" }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (data) => ({
                url: "/user/register",
                method: "POST",
                body: data
            })
        }),
        loginUser: builder.mutation({
            query: (data) => ({
                url: "/user/login",
                method: "POST",
                body: data
            })
        }),
        uploadImage: builder.mutation({
            query: (data) => ({
                url: "/upload",
                method: "POST",
                body: data
            })
        }),
        getCategories: builder.query({
            query: () => "/categories"
        }),
        getAllProducts: builder.query({
            query: ({ pageno, perpage }) => ({
                url: `/product/all?pageno=${pageno}&perpage=${perpage}`
            })
        }),
        getProductsByCategory: builder.query({
            query: ({ pageno, perpage, category }) => ({
                url: `/product/filter/category?pageno=${pageno}&perpage=${perpage}&category=${category}`
            })
        }),
        getProductBySearch: builder.query({
            query: ({ pageno, perpage, search }) => ({
                url: `/product/filter/search?pageno=${pageno}&perpage=${perpage}&search=${search}`
            })
        })
    })
})

export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    useUploadImageMutation,
    useGetCategoriesQuery,
    useGetAllProductsQuery,
    useGetProductsByCategoryQuery,
    useGetProductBySearchQuery
} = api