import React from 'react';
import styled from 'styled-components';



const StyledRateBox = styled.div`
    p {
        font-size: 12px;
        line-height: 16px;
        color: ${({ theme}) => theme.colors.gray.gray80};
        margin-bottom: 6px;
    }

    span {
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        color: ${({ theme}) => theme.colors.gray.gray100};
    }
`;


const RateBox = ({ name, rate }) => (
    <StyledRateBox>
        <p>{name}</p>
        <span>{rate}</span>
    </StyledRateBox>
)


export default RateBox;