import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
    primary: '#E66767',
    secondary: '#FFEBD9',
    terciary: '#FFF8F2',
    white: '#FFF',
    overlay: 'rgba(0, 0, 0, 0.8)'
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
    }

    body {
        background-color: ${colors.terciary};
        color: ${colors.primary};
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }
`

export const Logo = styled.img`
    width: 125px;
`

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
    color: ${colors.primary};
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

export const SidebarButton = styled.button`
    border: none;
    background-color: ${colors.secondary};
    color: ${colors.primary};
    padding: 4px;
    margin-top: 16px;
    width: 100%;
    font-weight: bold;
`