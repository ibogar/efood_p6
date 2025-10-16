import { HeaderContainer, Title } from "./styles";

import logopng from '../../assets/images/logo.png';
import { Logo } from "../../styles";

const Header = () => (
    <HeaderContainer>
        <Logo src={logopng}></Logo>
        <Title>Viva experiências gastronômicas <br/> no conforto da sua casa</Title>
    </HeaderContainer>
)
export default Header