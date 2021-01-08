import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


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

const Navigation = () => (
    <StyledMenu>
        <StyledMenuItem><Link to="/">Kursy walut</Link></StyledMenuItem>
        <StyledMenuItem><Link to="/about">O nas</Link></StyledMenuItem>
        <StyledMenuItem><Link to="/contact">Kontakt</Link></StyledMenuItem>
    </StyledMenu>
)

export default Navigation;