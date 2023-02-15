import { createSlice } from '@reduxjs/toolkit'

function loadCart() {
    let cart;
    const existCart = localStorage.getItem("cart")
    if (existCart) {
        cart = JSON.parse(existCart)
    } else {
        cart = {}
    }

    return cart
}

function loadTotal() {
    let cart = loadCart()
    let total = 0;
    for (let item in cart) {
        total += cart[item].quantity * cart[item].price
    }
    return total
}

const initialState = {
    value: loadCart(),
    subTotal: loadTotal()
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { _id, name, image, price } = action.payload;

            let newCart = state.value;
            if (_id in state.value) {
                newCart[_id].quantity += 1
            } else {
                newCart[_id] = { quantity: 1, name, image, price, _id }
            }

            let total = 0;
            for (let item in newCart) {
                total += newCart[item].quantity * newCart[item].price
            }

            state.value = newCart
            state.subTotal = total
            localStorage.setItem("cart", JSON.stringify(newCart))

        },
        removeFromCart: (state, action) => {
            const id = action.payload;

            let newCart = state.value;
            if (id in state.value) {
                newCart[id].quantity -= 1
            }
            if (newCart[id].quantity < 1) {
                delete newCart[id]
            }

            let total = 0;
            for (let item in newCart) {
                total += newCart[item].quantity * newCart[item].price
            }

            state.value = newCart
            state.subTotal = total
            localStorage.setItem("cart", JSON.stringify(newCart))
        },
        emptyCart: (state) => {
            state.value = {}
            state.subTotal = 0
            localStorage.removeItem("cart")
        }
    }
})

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions
export default cartSlice.reducer