import styled from 'styled-components'

import vector from '@/assets/images/vector.png'
import { breakpoints, colors } from '@/styles'

type HeaderProps = {
    $path: string
}

export const Container = styled.div<HeaderProps>`
    width: 100%;
    height: ${({$path}) => ($path === '/' ? '380px' : '186px')};
    background-image: url(${vector});
    display: flex;
    flex-direction: ${({$path}) => ($path === '/' ? 'column' : 'row')};
    justify-content: ${({$path}) => ($path === '/' ? 'center' : 'space-between')};
    align-items: center;
    text-align: center;
    margin-bottom: ${({$path}) => ($path === '/' ? '80px' : '0')};
    padding: 0 168px;

    @media (max-width: ${breakpoints.tablet}) {
        height: ${({$path}) => ($path === '/' ? '240px' : '186px')};;
        margin-bottom: ${({$path}) => ($path === '/' ? '20px' : '0')};
        justify-content: center;
        flex-wrap: wrap;
        gap: 12px;
        padding: 16px;
    }
`
export const Text = styled.p<HeaderProps>`
    font-size: ${({$path}) => ($path === '/' ? '36px' : '18px')};
    font-weight: bold;
    margin-top: ${({$path}) => ($path === '/' ? '140px' : '0px')};

    a {
        text-decoration: none;
        color: inherit;
    }

    span {
        cursor: pointer;

        &.disabled {
            cursor: default;
        }
    }

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 18px;
        margin-top: 0;
        order: 2;
    }
`

export const Hero = styled.div`
    width: 100%;
    height: 280px;
    background-size: cover;
    margin-bottom: 56px;
    background-position: center;
    color: ${colors.white};

    @media (max-width: ${breakpoints.desktop}) {
        text-align: center;
    }
`

export const BackgroundMask = styled.div`
    width: 100%;
    height: 280px;
    background-color: rgba(0, 0, 0, 0.5)
`

export const RestaurantType = styled.p`
    padding-top: 24px;
    font-size: 32px;
    font-weight: lighter;
`

export const RestaurantName = styled.h2`
    font-size: 32px;
    font-weight: bold;
    margin-top: 156px;
`
