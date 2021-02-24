import React from 'react';
import styled from 'styled-components';
import Avatar from '../../atoms/Avatar/Avatar';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 32px;
    padding-right: 32px;
    border-right: 1px solid ${({ theme }) => theme.colors.gray.gray05};

    a {
        font-size: 12px;
        color: ${({ theme }) => theme.colors.green.primary50};
        text-decoration: underline;
        cursor: pointer;

        &:hover {
            text-decoration: none;
        }
    }
`;

const StyledName = styled(Paragraph)`
    font-weight: 600;
    margin-bottom: 4px;
`;

const PanelSettingsBtn = () => (
    <StyledWrapper>
        <Avatar />
        <div>
            <StyledName>Witaj, Imie i nazwisko</StyledName>
            <a>Ustawienia konta - link</a>
        </div>
    </StyledWrapper>
);

export default PanelSettingsBtn;