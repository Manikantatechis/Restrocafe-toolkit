import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        carts: {
            list: [],
            subtotal: 0
        }
    },
    reducers: {
        addCartAction: (state, action) => {
            state.list = action.carts,
            state.subtotal = action.subtotal
        },
        increaseCartAction: (state, action) => {
            state.list = action.carts,
            state.subtotal = action.subtotal
        },
        decreaseCartAction: (state, action) => {
            state.list = action.carts,
            state.subtotal = action.subtotal
        },
        fetchCartAction: (state, action) => {
            state.list = action.carts,
            state.subtotal = action.subtotal
        },
    }
    }
    )
export const getCarts= (state)=>state.carts.carts.list
export const getSubtotal= (state)=>state.carts.subtotal
export const {addCartAction, increaseCartAction, decreaseCartAction, fetchCartAction}= cartSlice.actions
export default cartSlice.reducer