import { useDispatch, useSelector } from "react-redux"

import closeBtn from "@/assets/images/close.png"

import { RootReducer } from "@/store"
import { close, placeOrder, remove } from "@/store/reducers/cart"
import formatPrice from "@/utils/formatPrice"

import * as S from "./styles"
import { CLoseIcon, SidebarButton } from "../styles"

const Cart = () => {
    const dispatch = useDispatch()
    const { items, currentMode } = useSelector((state: RootReducer) => state.cart)

    const sumPrices = () => {

        const totalPrice = items.reduce((accumulator, currentValue) => {
            return accumulator += currentValue.preco
        } , 0)

        return formatPrice(totalPrice)
    }

    return (
        <>
            {items.length > 0 ? (
                <>
                    <CLoseIcon onClick={() => dispatch(close())} src={closeBtn} />
                    {items.map((i) => (
                        <S.CartProduct key={i.id}>
                            <img src={i.foto} />
                            <div>
                                <h4>{i.nome}</h4>
                                <p>{formatPrice(i.preco)}</p>
                                <p>Quantidade: {i.quantity}</p>
                            </div>
                            <button onClick={() => dispatch(remove(i.id))}/>
                        </S.CartProduct>
                    ))}
                    <S.TotalValue>
                        <p>Valor total</p>
                        <span>{sumPrices()}</span>
                    </S.TotalValue>
                    <SidebarButton onClick={() => dispatch(placeOrder('form'))}>Continuar para entrega</SidebarButton>
                </>
            ): 
            <S.ErrorMessage>Carrinho vazio, adicione produtos para exibir aqui e prosseguir com seu pedido</S.ErrorMessage>
            }
        </>
    )
}

export default Cart
