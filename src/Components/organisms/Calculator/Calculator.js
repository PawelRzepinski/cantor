import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import ButtonCalculator from '../../atoms/ButtonCalculator/ButtonCalculator';
import RateBox from '../../molecules/RateBox/RateBox';
import SelectCalculator from '../../atoms/SelectCalculator/SelectCalculator';



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
        buy: true,
        code: '',
        currency: [],
        inputValue: null,
        rate: 0,
        transactionValue: 0,
    }

    componentDidMount() {
        this.setState({
            currency: this.props.currency,
            rate: this.props.currency[0].ask
        });
    }

    handleClickBuy = () => {
        const select = document.querySelector('select');
        const selected = select.options[select.selectedIndex];
        const rate = selected.dataset.buy;

        this.setState({
            buy: true,
            rate: rate,
            transactionValue: this.updateTransactionValue(this.state.inputValue, rate)
        });
    }

    handleClickSale = () => {
        const select = document.querySelector('select');
        const selected = select.options[select.selectedIndex];
        const rate = selected.dataset.sale;

        this.setState({
            buy: false,
            rate: rate,
            transactionValue: this.updateTransactionValue(this.state.inputValue, rate)
        });
    }

    handleChangeValue = (e) => {
        this.setState({
            inputValue: e.target.value,
            transactionValue: this.updateTransactionValue(e.target.value)
        })
    }

    handleChangeSelect = (e) => {
        const selected = e.target.options[e.target.selectedIndex];
        const rate = this.state.buy ? selected.dataset.buy : selected.dataset.sale;

        this.setState({
            rate: rate,
            code: e.target.value,
            transactionValue: this.updateTransactionValue(this.state.inputValue, rate)
        })
    }

    updateTransactionValue = (value , rate = this.state.rate) => {
        let transactionValue = value * rate;
        transactionValue = Math.round(transactionValue * 100) / 100;
        return transactionValue;
    }


    render () {
        return (
            <StyledWrapper>
                <h1>Kalkulator wymiany walut</h1>
                <StyledButtonsWrapper>
                    <ButtonCalculator name={"Kupię"} active={this.state.buy ? true : false} onClick={this.handleClickBuy} />
                    <ButtonCalculator name={"Sprzedam"} active={this.state.buy ? false : true} onClick={this.handleClickSale} />
                </StyledButtonsWrapper>
                <StyledInputsWrapper>
                    <Input type={'number'} placeholder={"1000"} onChange={this.handleChangeValue} />
                    <SelectCalculator currency={this.state.currency} submitFn={this.handleChangeSelect}  />
                </StyledInputsWrapper>
                <StyledOutputWrapper>
                    <span>=</span>
                    <Input placeholder={"1000"} type={'text'} value={this.state.transactionValue} disabled/>
                    <Input type={'text'} value={"PLN"} disabled/>
                </StyledOutputWrapper>
                <StyledFootercalculator>
                    <RateBox name={'Aktualny kurs'} rate={this.state.rate}/>
                    <Button>Rezerwuj kurs</Button>                
                </StyledFootercalculator>
            </StyledWrapper>
        )
    }
}


const mapStateToProps = ({ currency }) => ({ currency })


export default connect(mapStateToProps)(Calculator);