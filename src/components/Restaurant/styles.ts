import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { colors } from "../../styles";

export const Card = styled.div`
    background-color: ${colors.white};
    color: ${colors.primary};
    border: 1px solid ${colors.primary};
    font-size: 14px;
    position: relative;
`

export const CardContainer = styled.div`
    padding: 8px;
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

const tagBtn = css`
    padding: 6px 4px;
    font-weight: bold;
    color: ${colors.terciary};
    background-color: ${colors.primary};
    display: inline-block;
`

export const Button = styled(Link)`
    ${tagBtn};
    text-decoration: none;
`

export const Tags = styled.div`
    position: absolute;
    top: 16px;
    right: 8px;
`

export const Tag = styled.div`
    ${tagBtn};
    font-size: 12px;  
    margin-right: 8px;  
`