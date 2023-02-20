import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://nmk-plant-house-backend.onrender.com/api/v1" }),
    tagTypes: ["products", "order"],
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
            }),
            providesTags: ["products"]
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
        getAllOrder: builder.query({
            query: () => "/order/all",
            providesTags: ["order"]
        }),
        getOrderByEmail: builder.query({
            query: (email) => `/order/user/${email}`,
            providesTags: ["order"]
        }),
        createOrder: builder.mutation({
            query: (data) => ({
                url: "/order/create",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["order", "products"]
        }),
        confirmPayment: builder.mutation({
            query: (id) => ({
                url: `/order/confirm-payment/${id}`,
                method: "PATCH"
            }),
            invalidatesTags: ["order"]
        }),
        updateStatus: builder.mutation({
            query: ({ id, value }) => ({
                url: `/order/update-status/${id}`,
                method: "PATCH",
                body: { status: value }
            }),
            invalidatesTags: ["order"]
        }),
        deleteOrder: builder.mutation({
            query: (id) => ({
                url: `/order/delete/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["order"]
        }),
        restockProduct: builder.mutation({
            query: ({ id, amount }) => ({
                url: `/product/restock/${id}`,
                method: "PATCH",
                body: { amount }
            }),
            invalidatesTags: ["products"]
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/product/delete/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["products"]
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
    useConfirmPaymentMutation,
    useUpdateStatusMutation,
    useDeleteOrderMutation,
    useGetOrderByEmailQuery,
    useRestockProductMutation,
    useDeleteProductMutation
} = api