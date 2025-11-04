import { colors } from "@/styles";
import styled from "styled-components";

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;

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
`

export const ModalButton = styled.a`
    padding: 6px 4px;
    font-weight: bold;
    color: ${colors.primary};
    background-color: ${colors.secondary};
    cursor: pointer;
`