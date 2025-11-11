import styled from 'styled-components'

import trash from '@/assets/images/trash.png'

import { colors } from '@/styles'


    
export const CartProduct = styled.div`
    width: 100%;
    height: 100px;
    background-color: ${colors.secondary};
    display: flex;
    padding: 8px;
    position: relative;
    margin-bottom: 16px;
    color: ${colors.primary};

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

export const CartFooter = styled.div`
    background-color: ${colors.primary};
    z-index: 1;
    position: sticky;
    bottom: 0;
    padding-top: 16px;
    padding-bottom: 32px;
`

export const TotalValue = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${colors.secondary};
    font-weight: bold;
`

export const ErrorMessage = styled.p`
    margin-top: 32px;
    font-size: 16px;
    font-weight: bold;
    color: ${colors.secondary};
    text-align: center;
`