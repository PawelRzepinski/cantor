import React from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { logOut } from '../../../actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../atoms/Logo/Logo';
import logoImg from "../../../assets/logo.svg";
import PanelSettingsBtn from '../../molecules/PanelSettingsBtn/PanelSettingsBtn';




const StyledWrapper = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 85px;
    display: flex;
    justify-content: center;
    align-items: center;    
    padding: 0 34px 0 50px; //?
    background-color: ${({ theme }) => theme.colors.gray.gray00};
`;

const StyledWrapperContent = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
`;

const StyledHeaderBtn = styled.button`
    display: flex;
    align-items: center;
    background: none;
    border: none;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.gray.gray80};
    cursor: pointer;
`;

const Icon = styled(FontAwesomeIcon)`
    margin-right: 15px;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.green.primary50};
`;


const PanelHeader = ({ userId, logOut }) => {
    console.log(userId)
    return (
    <StyledWrapper>
        <Logo image={logoImg} />
        {userId && 
            <StyledWrapperContent>
                <PanelSettingsBtn />
                <StyledHeaderBtn onClick={logOut}>
                    <Icon icon={faPowerOff} />
                    Wyloguj
                </StyledHeaderBtn>
            </StyledWrapperContent>
        }
    </StyledWrapper>
)}


const mapStateToProps = ({ userId, userName }) => {
    return {
        userId,
        userName
    }
}

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(logOut()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PanelHeader);