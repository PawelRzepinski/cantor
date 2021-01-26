import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from '../theme/variablesStyle';
import GlobalStyle from "../theme/GlobalStyle";



const MainTemplate = ({ children }) => (
    <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
)


export default MainTemplate;