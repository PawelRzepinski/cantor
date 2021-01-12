import React from 'react';
import styled from 'styled-components';
import rates from '../../../data/data';



const Input = ({type, placeholder, value, disabled}) => (
    <input placeholder={placeholder} type={type} value={value} disabled={disabled}></input>
)

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 10px 0px #707070;
    background-color: white;
    border-radius: 4px;
    padding: 40px;
    min-width: 60%;

    h1 {
        font-size: 20px;
        font-weight: 600;
        line-height: 32px;
        margin-bottom: 40px;
    }
`;

const StyledInputsWrapper = styled.div`
    width: 100%;
    max-width: 400px;
    height: 48px;
    border: 1px solid ${({ theme }) => theme.colors.gray.gray40};
    border-radius: 4px 4px 0 0;
    overflow: hidden;

    input,
    select {
        height: 100%;
        padding: 0 16px;
        border: none;
    }

    input {
        width: 75%;
        text-align: right;
        border-right: 1px solid ${({ theme }) => theme.colors.gray.gray40};

        &[disabled] {
            background-color: ${({ theme }) => theme.colors.gray.gray00};
            color: ${({ theme }) => theme.colors.gray.gray60};
        }
    }

    select {
        width: 25%;
    }
`;

const StyledOutputWrapper = styled(StyledInputsWrapper)`
    position: relative;
    border-top: none;
    border-radius: 0 0 4px 4px;

    input:last-child {
        width: 25%;
        text-align: left;
        padding-left: 20px;
        border: none;
    }

    span {
        position: absolute;
        top: 50%;
        left: 16px;
        transform: translateY(-50%);
        font-size: 20px;
        color: ${({ theme }) => theme.colors.gray.gray60};
    }
`;

const StyledButtonsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

// button jako osobny element z własnym StyledWrapper
    button {
        padding: 8px 16px;
        border-radius: 25px 0 0 25px;
        border: none;
        background-color: ${({ theme }) => theme.colors.gray.gray05};;

        &:last-child {
            border-left: 1px solid ${({ theme }) => theme.colors.gray.gray40};
            border-radius: 0 25px 25px 0;
        }
    }
`;

// Stworzyć element button który będzie przyjmował propsa active?


const Select = () => (
    <select onChange={e => {console.log(e.target.value)}}>
        {rates.map(rate => (
            <option key={rate.code} data-buy={rate.bid} data-sale={rate.ask}>{rate.code}</option>
        ))}
    </select>
)



class Calculator extends React.Component {
    state = {
        currencyA: {
            code: 'PLN',
            mid: 1,
        },
        currencyB: {
            code: 'USD',
            mid: 4.5
        },
        value: 1000,
    }



    render () {
        return (
            <StyledWrapper>
                <h1>Kalkulator wymiany walut</h1>
                <StyledButtonsWrapper>
                    <button>Kupuję</button>
                    <button>Sprzedaję</button>
                </StyledButtonsWrapper>
                <StyledInputsWrapper>
                    <Input placeholder={"1000"} />
                    <Select name={"paweł"} />
                </StyledInputsWrapper>
                <StyledOutputWrapper>
                    <span>=</span>
                    <Input placeholder={"1000"} type={'text'} value={"wynik mnożenia"} disabled/>
                    <Input type={'text'} value={"PLN"} disabled/>
                </StyledOutputWrapper>
            </StyledWrapper>
        )
    }
}

export default Calculator;