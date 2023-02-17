import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
    tagTypes: ["order"],
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
        getSingleProduct: builder.query({
            query: (id) => `/product/${id}`
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
        }),
        createOrder: builder.mutation({
            query: (data) => ({
                url: "/order/create",
                method: "POST",
                body: data
            })
        }),
        getAllOrder: builder.query({
            query: () => "/order/all"
        }),
        confirmPayment: builder.mutation({
            query: (id) => ({
                url: `/order/confirm-payment/${id}`,
                method: "PATCH"
            }),
            invalidatesTags: ["order"]
        })
    })
})

export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    useUploadImageMutation,
    useGetCategoriesQuery,
    useGetSingleProductQuery,
    useGetAllProductsQuery,
    useGetProductsByCategoryQuery,
    useGetProductBySearchQuery,
    useCreateOrderMutation,
    useGetAllOrderQuery,
    useConfirmPaymentMutation
} = api