import styled from "styled-components"

import { colors } from "@/styles"

interface ButtonProps {
    marginTop?: string
}

export const SidebarContainer = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: flex-end;

    &.is-open {
        display: flex;
    }
`

export const SidebarOverlay = styled.div`
    background-color: ${colors.overlay};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

export const Sidebar = styled.aside`
    background-color: ${colors.primary};
    max-width: 360px;
    width: 100%;
    z-index: 1;
    padding: 32px 8px;
    color: ${colors.secondary};
    font-size: 14px;
`

export const CLoseIcon = styled.img`
    position: absolute;
    top: 8px;
    right: 8px;
    height: 16px;
    width: 16px;
    cursor: pointer;
    margin-bottom: 8px;
`
export const Title = styled.h3`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
`

export const SidebarButton = styled.button<ButtonProps>`
    border: none;
    background-color: ${colors.secondary};
    color: ${colors.primary};
    padding: 4px;
    margin-top: ${(props) => props.marginTop || "16px" };
    width: 100%;
    font-weight: bold;
    cursor: pointer;
`
