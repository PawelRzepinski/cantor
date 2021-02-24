import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';



const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.gray.gray05};
    margin-right: 16px;
`;

const Icon = styled(FontAwesomeIcon)`
    color: red;
    font-size: 25px;
    color: ${({ theme }) => theme.colors.gray.gray80};
`;


const Avatar = ({ img }) => (
    <StyledWrapper>
        {img ?
            <img src={img} />
            :
            <Icon icon={faUser} />
        }
    </StyledWrapper>
);

export default Avatar;