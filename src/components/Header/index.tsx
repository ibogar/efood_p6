import { useLocation } from "react-router-dom";

import logopng from "assets/images/logo.png";

import * as S from "./styles";
import { Logo } from "@/styles";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "@/store";
import { open } from "@/store/reducers/cart";

interface Props {
    capa?: string
    tipo?: string
    titulo?: string
}

const Header = ({ capa, tipo, titulo}: Props) => {
    const location = useLocation();
    const path = location.pathname;

    const dispatch = useDispatch()
    const { items } = useSelector((state: RootReducer) => state.cart)

    const sumQuantity = () => items.reduce((accumulator, currentValue) => {
            return accumulator += currentValue.quantity
        } , 0)

    const disableOpenCart = () => {
        if (sumQuantity() > 0) {
            return dispatch(open())
        }
    }

    if (location.pathname === '/') {
        return (
            <S.Container $path={path}>
                <Logo to={"/"}>
                    <img src={logopng} alt="" />
                </Logo>
                <S.Text $path={path}>Viva experiências gastronômicas <br/> no conforto da sua casa</S.Text>
            </S.Container>
        ) 
    } else {
        return (
            <>
                <S.Container $path={path}>
                    <S.Text $path={path}>Restaurantes</S.Text>
                    <Logo to={"/"}>
                        <img src={logopng} alt="" />
                    </Logo>
                    <S.Text $path={path}>
                        <span className={sumQuantity() === 0 ? "disabled" : ""} onClick={disableOpenCart}>
                            {
                                sumQuantity() === 0 ? "Nenhum produto no carrinho" 
                                : sumQuantity() === 1 ? "1 produto no carrinho" 
                                : `${sumQuantity()} produtos no carrinho`
                            }
                        </span>
                    </S.Text>
                </S.Container>
                <S.Hero style={{backgroundImage: `url(${capa})`}}>
                    <S.BackgroundMask>
                        <div className="container">
                            <S.RestaurantType>{tipo}</S.RestaurantType>
                            <S.RestaurantName>{titulo}</S.RestaurantName>
                        </div>
                    </S.BackgroundMask>
                </S.Hero>
            </>
        )
    }
}
export default Header