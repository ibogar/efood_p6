import styled from "styled-components";

import vector from '../../assets/images/vector.png';

export const HeaderContainer = styled.div`
    width: 100%;
    height: 380px;
    background-image: url(${vector});
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 80px;
`
export const Title = styled.p`
    font-size: 36px;
    font-weight: bold;
    margin-top: 140px
`