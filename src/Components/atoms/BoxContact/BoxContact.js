import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const StyledBoxContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px;
    border: 1px solid ${({ theme }) => theme.colors.gray.gray05};
    border-radius: 6px;

    h2 {
        font-size: 13px;
        font-weight: 600;
        line-height: 18px;
        margin-bottom: 12px;
        color: ${({ theme }) => theme.colors.green.primary50}
    }

    p {
        font-size: 16px;
        font-weight: 600;
        line-height: 25px;
        white-space: nowrap;
    }
`;

const StyledImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.green.primary50};
    color: ${({ theme }) =>theme.colors.white};
    font-size: 22px;
    margin-bottom: 24px;
`;



const BoxContact = ({ icon, name, infoA, infoB }) => (
    <StyledBoxContent>
        <StyledImgWrapper>
            <FontAwesomeIcon icon={icon} />
        </StyledImgWrapper>
        <h2>{name}</h2>
        <p>{infoA}</p>
        {infoB ? <p>{infoB}</p> : null}
    </StyledBoxContent>
)


export default BoxContact;