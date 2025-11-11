import styled from 'styled-components'

import { breakpoints, colors } from '@/styles'

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
    padding: 0 20px;

    @media (max-width: ${breakpoints.tablet}) {
            grid-template-columns: 1fr;
            
        }

`

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: none;
    align-items: center;
    justify-content: center;

    &.visible {
        display: flex;
    }

    .overlay {
        width: 100%;
        height: 100%;
        background-color: ${colors.overlay};
        position: absolute;
        top: 0;
        left: 0;
    }

    @media (max-width: ${breakpoints.tablet}) {
        align-items: flex-start;
    }
`
 
export const ModalContent = styled.div`
    width: 100%;
    height: 344px;
    padding: 32px;
    background-color: ${colors.primary};
    font-size: 14px;
    color: ${colors.white};
    display: flex;
    z-index: 1;
    position: relative;



    div {
        flex-direction: column;
    }

    @media (max-width: ${breakpoints.tablet}) {
        flex-direction: column;
        margin: 80px 20px;
        padding: 16px;
        height: 80vh;
        align-items: center;
    }
`

export const ModalCLose = styled.img`
    position: absolute;
    top: 8px;
    right: 8px;
    height: 16px;
    width: 16px;
    cursor: pointer;
`

export const ModalImage = styled.img`
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-right: 24px;

    @media (max-width: ${breakpoints.tablet}) {
        width: 200px;
        height: 200px;
        margin-bottom: 12px;
        margin-right: 0;
    }
`

export const ModalTitle = styled.h3`
    font-size: 18px;
    font-weight: bold;
`

export const ModalDescription = styled.div`
    line-height: 22px;
    margin: 16px 0;

    .servings {
        margin-top: 24px;
    }

    @media (max-width: ${breakpoints.tablet}) {
        height: 220px;
        overflow-y: auto;
    }
`

export const ModalButton = styled.a`
    padding: 6px 4px;
    font-weight: bold;
    color: ${colors.primary};
    background-color: ${colors.secondary};
    cursor: pointer;
`