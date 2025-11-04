import { createSlice, PayloadAction} from "@reduxjs/toolkit"

import { ProductType } from "@/pages/Home"

interface CartProduct extends ProductType {
    quantity: number
}

interface CartState {
    items: CartProduct[]
    open: boolean
}

const initialState: CartState = {
    items: [],
    open: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<ProductType>) => {

            const productOnCart = state.items.find((item) => item.id === action.payload.id)
            
            if (productOnCart) {
                productOnCart.quantity += 1
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: 1
                }
                )
            }
        },
        open: (state) => {
            state.open = true
        },
        close: (state) => {
            state.open = false
        },
        remove: (state, action: PayloadAction<number>) => {

            const productOnCart = state.items.find((item) => item.id === action.payload)

            if (productOnCart && productOnCart.quantity > 1) {
                productOnCart.quantity -= 1
            } else {
                state.items = state.items.filter((item) => item.id !== action.payload) 
            }
            
        }
    }
})


export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
