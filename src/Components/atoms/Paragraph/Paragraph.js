import styled from 'styled-components';

const Paragraph = styled.p`
    font-size: 14px;
    line-height: 1.1.%;
    color: ${({ theme }) => theme.colors.gray.gray80}
`;

export default Paragraph