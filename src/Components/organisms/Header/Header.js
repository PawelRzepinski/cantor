import React from 'react';
import styled from 'styled-components';
import Navigation from "../../molecules/Navigation/Navigation";
import Logo from '../../atoms/Logo/Logo';
import logoImg from "../../../assets/logo.svg";




const StyledWrapper = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 34px 0 50px;
    background-color: white;
`;


const Header = () => (
    <StyledWrapper>
        <Logo image={logoImg} />
        <Navigation />
    </StyledWrapper>
)


export default Header;