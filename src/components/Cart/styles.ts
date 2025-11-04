import styled from "styled-components";

import { colors } from "@/styles";
import trash from "assets/images/trash.png"

export const CartContainer = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: flex-end;

    &.open {
        display: flex;
    }
`

export const Overlay = styled.div`
    background-color: ${colors.overlay};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

export const CartSidebar = styled.aside`
    background-color: ${colors.primary};
    max-width: 360px;
    width: 100%;
    z-index: 1;
    padding: 32px 8px;
    color: ${colors.primary};
    font-size: 14px;
`

export const CartCLose = styled.img`
    position: absolute;
    top: 8px;
    right: 8px;
    height: 16px;
    width: 16px;
    cursor: pointer;
    margin-bottom: 8px;
`
    
export const CartProduct = styled.div`
    width: 100%;
    height: 100px;
    background-color: ${colors.secondary};
    display: flex;
    padding: 8px;
    position: relative;
    margin-bottom: 16px;

    img {
        width: 80px;
        height: 80px;
        object-fit: cover;
    }

    div {
        margin-left: 8px;

        h4 {
            margin-bottom: 16px;
            font-size: 18px;
        }
    }

    button {
        background: url(${trash}) no-repeat;
        background-size: contain;
        height: 16px;
        width: 16px;
        border: none;
        position: absolute;
        bottom: 8px;
        right: 8px;
        cursor: pointer;
    }
`

export const TotalValue = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${colors.secondary};
    margin-top: 40px;
    font-weight: bold;
`

export const FinishButton = styled.button`
    border: none;
    background-color: ${colors.secondary};
    color: ${colors.primary};
    padding: 4px;
    margin-top: 16px;
    width: 100%;
    font-weight: bold;
`