import { HeaderContainer, Title } from "./styles";

import logo from '../../assets/images/logo.png';
import { Logo } from "../../styles";

const Header = () => (
    <HeaderContainer>
        <Logo src={logo}></Logo>
        <Title>Viva experiências gastronômicas <br/> no conforto da sua casa</Title>
    </HeaderContainer>
)
export default Header