import { Link } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
    primary: '#E66767',
    secondary: '#FFEBD9',
    terciary: '#FFF8F2',
    white: '#FFF',
    overlay: 'rgba(0, 0, 0, 0.8)'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
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

    .center-loader {
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const Logo = styled(Link)`
    width: 125px;

    @media (max-width: ${breakpoints.tablet}) {
        order: 1;

        img {
            margin-bottom: 16px;
        }
    }
`
