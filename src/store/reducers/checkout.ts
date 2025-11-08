import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SidebarMode = 'cart' | 'checkout' | 'form'

interface CheckoutState {
    currentMode: SidebarMode,
    orderId: string
}

const initialState: CheckoutState = {
    currentMode: 'cart',
    orderId: ''
}

const checkoutSlice = createSlice({
    name: "checkout",
    initialState,
    reducers: {
        changeMode: (state, action:PayloadAction<SidebarMode>) => {
            state.currentMode = action.payload
        },
        setOrder: (state, action:PayloadAction<string> ) => {
            state.orderId = action.payload
        }
    }
})

export const { changeMode, setOrder } = checkoutSlice.actions
export default checkoutSlice.reducer