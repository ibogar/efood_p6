import * as S from "./styles";

import logopng from "assets/images/logo.png";
import { Logo } from "@/styles";
import { useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const path = location.pathname;

    if (location.pathname === '/') {
        return (
            <S.Container path={path}>
                <Logo src={logopng}></Logo>
                <S.Text path={path}>Viva experiências gastronômicas <br/> no conforto da sua casa</S.Text>
            </S.Container>
        ) 
    } else {
        return (
            <>
                <S.Container path={path}>
                    <S.Text path={path}>Restaurantes</S.Text>
                    <Logo src={logopng}></Logo>
                    <S.Text path={path}>0 produto(s) no carrinho</S.Text>
                </S.Container>
                <S.Hero>
                    <S.BackgroundMask>
                        <div className="container">
                            <S.RestaurantType>Italiana</S.RestaurantType>
                            <S.RestaurantName>La Dolce Vita Trattoria</S.RestaurantName>
                        </div>
                    </S.BackgroundMask>
                </S.Hero>
            </>
        )
    }
}
export default Header