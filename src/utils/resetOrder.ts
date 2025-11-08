import { clear, close } from "@/store/reducers/cart"
import { changeMode } from "@/store/reducers/checkout"
import { useDispatch } from "react-redux"



const resetOrder = () => {
    const dispatch = useDispatch()
    dispatch(clear())
    dispatch(close())
    dispatch(changeMode('cart'))
}

export default resetOrder