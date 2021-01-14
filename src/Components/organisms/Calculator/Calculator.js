import React from 'react';
import styled from 'styled-components';
import rates from '../../../data/data';
import Button from '../../atoms/Button/Button';
import ButtonCalculator from '../../atoms/ButtonCalculator/ButtonCalculator';
import RateBox from '../../molecules/RateBox/RateBox';



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
    margin-bottom: 20px;
`;

const StyledFootercalculator = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 400px;
    margin-top: 20px;
`;


const Select = () => (
    <select onChange={e => {console.log(e.target.value)}}>
        {rates.map(rate => (
            <option key={rate.code} data-buy={rate.bid} data-sale={rate.ask}>{rate.code}</option>
        ))}
    </select>
)



class Calculator extends React.Component {
    state = {
        buy: true,
    }

    handleClickBuy = () => this.setState({buy: true});
    handleClickSale = () => this.setState({buy: false});


    render () {
        return (
            <StyledWrapper>
                <h1>Kalkulator wymiany walut</h1>
                <StyledButtonsWrapper>
                    <ButtonCalculator name={"Kupię"} active onClick={this.handleClickBuy} />
                    <ButtonCalculator name={"Sprzedam"} onClick={this.handleClickSale} />
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
                <StyledFootercalculator>
                    <RateBox name={'Aktualny kurs'} rate={'4,567'}/>
                    <Button>Rezerwuj kurs</Button>                
                </StyledFootercalculator>
            </StyledWrapper>
        )
    }
}

export default Calculator;