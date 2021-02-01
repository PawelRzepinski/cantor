import React from 'react';
import styled from 'styled-components';
import PanelTemplate from '../../templates/PanelTemplate';
import SideSectionImg from '../../assets/exchange.jpg';
import { connect } from 'react-redux';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import { authenticate as authenticateAction } from '../../actions';



const StyledWrapper = styled.section`
    position: relative;
    display: flex;
    height: 100%;
`;

const StyledColumn = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: max(60%, 320px);

        h1 {
            margin-bottom: 32px;
        }

        input {
            border: 1px solid ${({ theme }) => theme.colors.gray.gray40};
            border-radius: 4px;
            padding: 14px 17px;
            margin-bottom: 16px;
            width: 100%;
            font-size: 14px;
            line-height: 20px;
            color: ${({ theme }) => theme.colors.gray.gray80};
        }

        button {
            color: ${({ theme }) => theme.colors.white};
            background-color: ${({ theme }) => theme.colors.gray.gray60};
            border: none;
            border-radius: 4px;
            padding: 12px 32px;
            margin-top: 16px;
            cursor: pointer;
        }
    }
`;

const StyledBefore = styled.div`
    width: 40%;
    height: 100%;
    background-color: green;
`;


const LoginView = ({ authenticate }) => (
    <PanelTemplate sideSectionImg={SideSectionImg}>
        <StyledWrapper>
            <StyledColumn>
                <Formik
                    initialValues={{ username:'', password:'' }}
                    onSubmit={({ username, password }) => {
                        console.log(username, password)
                        authenticate(username, password)
                    }}
                >
                    {({ isSubmitting }) => (
                    <Form>
                        <h1>Zaloguj się</h1>
                        <Field type="text" name="username" placeholder="e-mail" />
                        <ErrorMessage name="username" component="div" />
                        <Field type="password" name="password" placeholder="Hasło" />
                        <ErrorMessage name="password" component="div" />
                        <button type="submit" disabled={isSubmitting}>Zaloguj się</button>
                    </Form>
                    )}
                </Formik>
            </StyledColumn>
            <StyledBefore>
                
            </StyledBefore>
        </StyledWrapper>
    </PanelTemplate>
)

const mapDispatchToProps = dispatch => ({
    authenticate: (username, password) => dispatch(authenticateAction(username, password)),
})

export default connect(null, mapDispatchToProps)(LoginView);