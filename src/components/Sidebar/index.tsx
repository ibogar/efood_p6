import { useDispatch, useSelector } from "react-redux"

import Cart from "./Cart"
import Checkout from "./Checkout"
import Form from "./Form"

import { RootReducer } from "@/store"
import { clear, close } from "@/store/reducers/cart"
import { changeMode } from "@/store/reducers/checkout"

import * as S from "./styles"



const Sidebar = () => {

    const dispatch = useDispatch()
    const { isOpen } = useSelector((state: RootReducer) => state.cart)
    const { currentMode } = useSelector((state:RootReducer) => state.checkout)

    const resetOrder = () => {
        dispatch(clear())
        dispatch(close())
        dispatch(changeMode('cart'))
    }
    return (
        <S.SidebarContainer className={isOpen ? "is-open" : ""}>
            <S.SidebarOverlay onClick={() => {currentMode === 'checkout' ? resetOrder() : dispatch(close())}}/>
            <S.Sidebar>
                {currentMode === 'cart' ? <Cart /> 
                : currentMode === 'form' ? <Form />
                : <Checkout />
            }
            </S.Sidebar>
        </S.SidebarContainer>
    )
}

export default Sidebar