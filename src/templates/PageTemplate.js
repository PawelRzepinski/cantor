import React from 'react';
import styled from "styled-components";
import Header from '../Components/organisms/Header/Header';




const StyledPageWrapper = styled.main`
    display: flex;
`;

const StyledMainSection = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 65vw;
    padding: 135px 50px 50px 50px;
`;

const StyledSideSection = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 35vw;

    img {
        width: 100%;
        height: auto;
    }

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: .7;
        background-color: ${({ theme }) => theme.colors.green.primary50};
    }
`;


const PageTemplate = ({children, sideSectionImg}) => (
    <StyledPageWrapper>
        <StyledMainSection>
            <Header />
            {children}
        </StyledMainSection>
        <StyledSideSection>
            <img src={sideSectionImg}></img>
        </StyledSideSection>
    </StyledPageWrapper>
)


export default PageTemplate;