import React from "react";
import styled from "styled-components";
import Header from '../Components/organisms/Header/Header';
import GlobalStyle from "../theme/GlobalStyle";
import Input from '../Components/atoms/Input/Input';
import Calculator from "../Components/organisms/Calculator/Calculator";

const StyledMain = styled.main`
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
    height: 100vh;
    width: 35vw;
    background-color: green;
`;


const MainTemplate = () => (
    <StyledMain>
    <GlobalStyle />
        <StyledMainSection>
            <Header />

            <Calculator />
            
        </StyledMainSection>
        <StyledSideSection>

        </StyledSideSection>
    </StyledMain>
)


export default MainTemplate;