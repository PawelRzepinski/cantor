import React from 'react';
import styled from 'styled-components';
import PanelHeader from '../Components/organisms/PanelHeader/PanelHeader';



const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.gray.gray00};
    padding-top: 130px;
    padding-bottom: 80px;
`;

const StyledContentWrapper = styled.div`
    background-color: white;
    width: 100%;
    max-width: 1020px;
    height: 100%;
`;


const PanelTemplate = ({ children }) => (
    <StyledWrapper>
        <PanelHeader />
        <StyledContentWrapper>
            { children }        
        </StyledContentWrapper>
    </StyledWrapper>
)


export default PanelTemplate;