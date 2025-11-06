import { useDispatch, useSelector } from "react-redux"

import closeBtn from "../../assets/images/close.png"

import { RootReducer } from "@/store"
import { close, remove } from "@/store/reducers/cart"
import formatPrice from "@/utils/formatPrice"

import * as S from "./styles"
import * as G from "@/styles"

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
        <G.SidebarContainer className={isOpen ? "is-open" : ""}>
            <G.SidebarOverlay onClick={() => dispatch(close())}/>
            <G.Sidebar>
                {items.length > 0 ? (
                    <>
                        <G.CLoseIcon onClick={() => dispatch(close())} src={closeBtn} />
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
                        <G.SidebarButton>Continuar para entrega</G.SidebarButton>
                    </>
                ): 
                <S.ErrorMessage>Carrinho vazio, adicione produtos para exibir aqui e prosseguir com seu pedido</S.ErrorMessage>
                }
            </G.Sidebar>
        </G.SidebarContainer>
    )
}

export default Cart