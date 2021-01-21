import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from '../Button/Button';



const StyledButton = styled(Button)`
    background-color: ${({ theme }) => theme.colors.gray.gray05};
    color: ${({ theme }) => theme.colors.gray.gray60};
    font-size: 12px;
    letter-spacing: .5px;
    padding: 8px 16px;
    border-radius: 25px 0 0 25px;

    &:hover {
        background-color: ${({ theme }) => theme.colors.gray.gray05};
    }

    &:last-child {
        border-radius: 0 25px 25px 0;        
    }

    ${({ active }) => active && css`
        background-color: ${({ theme }) => theme.colors.green.primary50};
        color: ${({ theme }) => theme.colors.white};

        &:hover {
            background-color: ${({ theme }) => theme.colors.green.primary50};
        }
    `}
`;


const ButtonCalculator = ({ name, active, ...props}) => (
    <StyledButton active={active} {...props}>{name}</StyledButton>
)


ButtonCalculator.propTypes = {
    name: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
}


export default ButtonCalculator;