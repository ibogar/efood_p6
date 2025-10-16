import styled from "styled-components";
import { colors } from "../../styles";

export const FooterContainer = styled.footer`
    width: 100%;
    height: 320px;
    background-color: ${colors.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 120px;
    text-align: center;

    p {
        max-width: 800px;
    }
`

export const SocialMedia = styled.ul`
    display: flex;
    margin-top: 32px;
    margin-bottom: 80px;

    li {
        margin: 4px;
    }
`

