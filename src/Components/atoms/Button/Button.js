import styled from 'styled-components';




const Button = styled.button`
    padding: 12px 32px;
    background-color: ${({ theme }) => theme.colors.green.primary50};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 4px;
    border: none;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    cursor: pointer;
`;


export default Button;