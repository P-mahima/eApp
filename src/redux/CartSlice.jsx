import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"cart",
    initialState: JSON.parse(localStorage.getItem('cart')) ?? [],
    reducers:{
        addToCart(state, action){
            state.push(action.payload) //action having two paramrter type and payload, type is string payload can be anything , when you add to cart action came into payload , so that it can be anything.
        },
        deleteFromCart(state, action){
            return state.filter(item => item.id != action.payload.id)
        }
    }

})
export const {addToCart, deleteFromCart} = CartSlice.actions
export default CartSlice.reducer