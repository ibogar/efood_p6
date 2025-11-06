import styled from "styled-components";

import vector from '../../assets/images/vector.png';
import { colors } from "../../styles";

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
    margin-bottom: ${({$path}) => ($path === '/' ? '80px' : '0px')};
    padding: 0 168px;
`
export const Text = styled.p<HeaderProps>`
    font-size: ${({$path}) => ($path === '/' ? '36px' : '18px')};
    font-weight: bold;
    margin-top: ${({$path}) => ($path === '/' ? '140px' : '0px')};

    span {
        cursor: pointer;

        &.disabled {
            cursor: default;
        }
    }
`

export const Hero = styled.div`
    width: 100%;
    height: 280px;
    background-size: cover;
    margin-bottom: 56px;
    background-position: center;
    color: ${colors.white}
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
