import React from 'react';
import styled from 'styled-components';
import rates from '../../../data/data';
import Button from '../../atoms/Button/Button';
import ButtonCalculator from '../../atoms/ButtonCalculator/ButtonCalculator';
import RateBox from '../../molecules/RateBox/RateBox';
import SelectCalculator from '../../atoms/SelectCalculator/SelectCalculator';



const Input = ({type, placeholder, value, disabled, ...props}) => (
    <input placeholder={placeholder} type={type} value={value} disabled={disabled} {...props}></input>
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

    input {
        font-weight: 600;
        
        &:last-child {
            width: 25%;
            text-align: left;
            padding-left: 20px;
            border: none;
            font-weight: 400;
        }
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






class Calculator extends React.Component {
    state = {
        data: [],
        buy: true,
        inputValue: null,
        transactionValue: 0,
        rate: 0,
        code: ''
    }

    componentDidMount() {
        this.setState({data: [...rates]})
    }

    handleClickBuy = () => this.setState({buy: true});
    handleClickSale = () => this.setState({buy: false});
    handleChangeValue = (e) => this.setState({inputValue: e.target.value})


    render () {
        return (
            <StyledWrapper>
                <h1>Kalkulator wymiany walut</h1>
                <StyledButtonsWrapper>
                    <ButtonCalculator name={"Kupię"} active={this.state.buy ? true : false} onClick={this.handleClickBuy} />
                    <ButtonCalculator name={"Sprzedam"} active={this.state.buy ? false : true} onClick={this.handleClickSale} />
                </StyledButtonsWrapper>
                <StyledInputsWrapper>
                    <Input placeholder={"1000"} onChange={this.handleChangeValue} />
                    <SelectCalculator currency={this.state.data} rate={this.state.rate} code={this.state.code} rateType={this.state.buy}  />
                </StyledInputsWrapper>
                <StyledOutputWrapper>
                    <span>=</span>
                    <Input placeholder={"1000"} type={'text'} value={this.state.transactionValue} disabled/>
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