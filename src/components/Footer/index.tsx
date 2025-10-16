import { Logo } from "../../styles";
import { FooterContainer, SocialMedia } from "./styles";
import logopng from '../../assets/images/logo.png';
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import twitter from '../../assets/images/twitter.png';

const Footer = () => (
    <FooterContainer>
        <Logo src={logopng}></Logo>
        <SocialMedia>
            <li>
                <a href="#">
                    <img src={facebook} alt="facebook" />
                </a>
            </li>
            <li>
                <a href="#">
                    <img src={instagram} alt="instagram" />
                </a>
            </li>
            <li>
                <a href="#">
                    <img src={twitter} alt="twitter" />
                </a>
            </li>
        </SocialMedia>
        <p>
            A efood é uma plataforma para divulgação de estabelecimentos, 
            a responsabilidade pela entrega, qualidade dos produtos é toda 
            do estabelecimento contratado. 
        </p>
    </FooterContainer>
)

export default Footer