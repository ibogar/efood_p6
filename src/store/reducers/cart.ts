import { createSlice, PayloadAction} from "@reduxjs/toolkit"


interface CartProduct extends ProductType {
    quantity: number
}

interface CartState {
    items: CartProduct[]
    isOpen: boolean
}

const initialState: CartState = {
    items: [],
    isOpen: false
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
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
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
