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
    justify-content: center;
    align-items: center;
    padding: 0 34px 0 50px;
    background-color: ${({ theme }) => theme.colors.gray.gray05};
`;



const PanelHeader = () => (
    <StyledWrapper>
        <Logo image={logoImg} />
    </StyledWrapper>
)


export default PanelHeader;