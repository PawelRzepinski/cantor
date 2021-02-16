import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import PanelTemplate from '../../templates/PanelTemplate';
import { connect } from 'react-redux';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import { authenticate as authenticateAction } from '../../actions';
import Button from '../../Components/atoms/Button/Button';
import { H2 } from '../../Components/atoms/Headers/Headers';
import Paragraph from '../../Components/atoms/Paragraph/Paragraph';



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
    }
`;

const StyledBefore = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.green.primary50};
    color: ${({ theme }) => theme.colors.white};
`;

const ColumnButton = styled(Button)`
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.white70};
    border-radius: 50px;
    color: ${({ theme }) => theme.colors.white70};
    margin-top: 32px;
    padding: 12px 60px;

    &:hover {
        background-color: transparent;
        color: ${({ theme }) => theme.colors.white};
        border-color: ${({ theme }) => theme.colors.white};
    }
`;

const Header2 = styled(H2)`
    margin-bottom: 32px;
`;

const Text = styled(Paragraph)`
    color: ${({ theme }) => theme.colors.white};
    line-height: 1.4;
    letter-spacing: .5px;
    text-align: center;
`;


const LoginView = ({ userId, authenticate }) => (
    <PanelTemplate>
        <StyledWrapper>
            <StyledColumn>
                <Formik
                    initialValues={{ username:'', password:'' }}
                    onSubmit={({ username, password }) => {
                        authenticate(username, password)
                    }}
                >
                    {() => {
                        if(userId) {
                             return <Redirect to="/panel" />
                        }
                        return (
                            <Form>
                                <h1>Zaloguj się</h1>
                                <Field type="text" name="username" placeholder="e-mail" />
                                <ErrorMessage name="username" component="div" />
                                <Field type="password" name="password" placeholder="Hasło" />
                                <ErrorMessage name="password" component="div" />
                                <Button type="submit">Zaloguj się</Button>
                            </Form>
                        )
                    }}
                </Formik>
            </StyledColumn>
            <StyledBefore>
                <Header2>Hello, friend</Header2>
                <Text>Enter your personal details <br /> and start journey with us</Text>
                <Link to="/signup"><ColumnButton>Sign up</ColumnButton></Link>
            </StyledBefore>
        </StyledWrapper>
    </PanelTemplate>
)


const mapStateToProps = ({ userId, userName}) => {
    return {
        userId,
        userName
    }
}

const mapDispatchToProps = dispatch => ({
    authenticate: (username, password) => dispatch(authenticateAction(username, password)),
})


export default connect(mapStateToProps, mapDispatchToProps)(LoginView);