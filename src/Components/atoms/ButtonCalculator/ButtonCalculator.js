import styled, { css } from 'styled-components';
import Button from '../Button/Button';



const StyledButton = styled(Button)`
    background-color: ${({ theme }) => theme.colors.gray.gray05};
    color: ${({ theme }) => theme.colors.gray.gray60};
    font-size: 12px;
    letter-spacing: .5px;
    padding: 8px 16px;
    border-radius: 25px 0 0 25px;

    &:last-child {
        border-radius: 0 25px 25px 0;
    }

    ${({ active }) => active && css`
        background-color: ${({ theme }) => theme.colors.green.primary50};
        color: ${({ theme }) => theme.colors.white};
    `}
`;


const ButtonCalculator = ({name, active}) => (
    <StyledButton active={active}>{name}</StyledButton>
)


export default ButtonCalculator;