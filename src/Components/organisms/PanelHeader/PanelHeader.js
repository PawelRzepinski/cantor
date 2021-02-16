import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { logOut } from '../../../actions/index';
import Logo from '../../atoms/Logo/Logo';
import logoImg from "../../../assets/logo.svg";



const StyledWrapper = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 34px 0 50px;
    background-color: ${({ theme }) => theme.colors.gray.gray05};
`;


const PanelHeader = ({ userId, logOut }) => {
    console.log(userId)
    return (
    <StyledWrapper>
        <Logo image={logoImg} />
        {userId && 
            <button onClick={logOut}>klik</button>        
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