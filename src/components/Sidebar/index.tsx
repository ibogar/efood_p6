import { useDispatch, useSelector } from "react-redux"

import Cart from "./Cart"

import { RootReducer } from "@/store"
import { close } from "@/store/reducers/cart"

import * as S from "./styles"
import Checkout from "./Checkout"
import Form from "./Form"


const Sidebar = () => {

    const dispatch = useDispatch()
    const { isOpen, currentMode } = useSelector((state: RootReducer) => state.cart)

    return (
        <S.SidebarContainer className={isOpen ? "is-open" : ""}>
            <S.SidebarOverlay onClick={() => dispatch(close())}/>
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