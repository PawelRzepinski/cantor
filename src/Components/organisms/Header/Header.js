import React from 'react';
import styled from 'styled-components';
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
    padding: 0 50px;
    background-color: white;
`;


const StyledMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
`;


const StyledMenuItem = styled.li`
    padding: 5px 10px;
`;



const Header = () => (
    <StyledWrapper>
        <Logo image={logoImg} />
        <StyledMenu>
            <StyledMenuItem>Kursy walut</StyledMenuItem>
            <StyledMenuItem>O nas</StyledMenuItem>
            <StyledMenuItem>Kontakt</StyledMenuItem>
        </StyledMenu>
    </StyledWrapper>
)




export default Header;