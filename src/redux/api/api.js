import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
    tagTypes: ["category", "products", "order", "user"],
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
        getAllUser: builder.query({
            query: ({ pageno, perpage }) => `/user/all?pageno=${pageno}&perpage=${perpage}`,
            providesTags: ["user"]
        }),
        uploadImage: builder.mutation({
            query: (data) => ({
                url: "/upload",
                method: "POST",
                body: data
            })
        }),
        getCategories: builder.query({
            query: () => "/categories",
            providesTags: ["category"]
        }),
        createCategory: builder.mutation({
            query: (data) => ({
                url: "/categories",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["category"]
        }),
        deleteCategory: builder.mutation({
            query: (id) => ({
                url: `/categories/delete/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["category"]
        }),
        createProduct: builder.mutation({
            query: (data) => ({
                url: "/product/create",
                method: "POST",
                body: data
            })
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
        getSingleOrder: builder.query({
            query: (id) => `/order/${id}`,
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
        }),
        adminSummery: builder.query({
            query: () => "/summery",
            providesTags: ["user", "order"]
        }),
        userSummery: builder.query({
            query: (email) => `/summery/${email}`,
            providesTags: ["order"]
        }),
        makeSeller: builder.mutation({
            query: (id) => ({
                url: `/user/seller/${id}`,
                method: "PUT"
            }),
            invalidatesTags: ["user"]
        }),
        addReview: builder.mutation({
            query: (data) => ({
                url: `/order/review/add/${data._id}`,
                method: "POST",
                body: data
            })
        })
    })
})

export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    useGetAllUserQuery,
    useUploadImageMutation,
    useGetCategoriesQuery,
    useCreateCategoryMutation,
    useDeleteCategoryMutation,
    useCreateProductMutation,
    useGetSingleProductQuery,
    useGetAllProductsQuery,
    useGetProductsByCategoryQuery,
    useGetProductBySearchQuery,
    useCreateOrderMutation,
    useGetAllOrderQuery,
    useGetSingleOrderQuery,
    useConfirmPaymentMutation,
    useUpdateStatusMutation,
    useDeleteOrderMutation,
    useGetOrderByEmailQuery,
    useRestockProductMutation,
    useDeleteProductMutation,
    useAdminSummeryQuery,
    useUserSummeryQuery,
    useMakeSellerMutation,
    useAddReviewMutation
} = api