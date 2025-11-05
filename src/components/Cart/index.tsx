import { useDispatch, useSelector } from "react-redux"
import * as S from "./styles"

import closeBtn from "../../assets/images/close.png"
import { RootReducer } from "@/store"
import { close, remove } from "@/store/reducers/cart"
import formatPrice from "@/utils/formatPrice"

const Cart = () => {
    const dispatch = useDispatch()
    const { items, isOpen } = useSelector((state: RootReducer) => state.cart)

    const sumPrices = () => {

        const totalPrice = items.reduce((accumulator, currentValue) => {
            return accumulator += currentValue.preco
        } , 0)

        return formatPrice(totalPrice)
    }

    return (
        <S.CartContainer className={isOpen ? "is-open" : ""}>
            <S.Overlay onClick={() => dispatch(close())}/>
            <S.CartSidebar>
                <S.CartCLose onClick={() => dispatch(close())} src={closeBtn} />
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
                <S.FinishButton>Continuar para entrega</S.FinishButton>
            </S.CartSidebar>
        </S.CartContainer>
    )
}

export default Cart