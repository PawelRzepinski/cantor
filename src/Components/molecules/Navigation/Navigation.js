import React from 'react';
import { NavLink } from 'react-router-dom';
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

    .active {
        color: red;
    }
`;


const Navigation = () => (
    <nav>
        <StyledMenu>
            <StyledMenuItem><NavLink to="/currency" activeClass="active">Kursy walut</NavLink></StyledMenuItem>
            <StyledMenuItem><NavLink to="/about" activeClass="active">O nas</NavLink></StyledMenuItem>
            <StyledMenuItem><NavLink to="/contact" activeClass="active">Kontakt</NavLink></StyledMenuItem>
        </StyledMenu>
    </nav>
)


export default Navigation;