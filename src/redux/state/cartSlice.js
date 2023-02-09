import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state) => {
            
        }
    }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer