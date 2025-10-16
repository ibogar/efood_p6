import styled, { css } from "styled-components";
import { colors } from "../../styles";

export const Card = styled.div`
    background-color: ${colors.primary};
    color: ${colors.secondary};
    font-size: 14px;
    padding: 8px;
`

export const CardContainer = styled.div`
`

export const Image = styled.img`
    width:100%;
`

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 16px;
`

export const Description = styled.p`
    line-height: 22px;
    margin: 16px 0;
`

export const Button = styled.a`
    padding: 4px 0;
    font-weight: bold;
    color: ${colors.primary};
    background-color: ${colors.secondary};
    display: block;
    text-decoration: none;
    text-align: center;
`


