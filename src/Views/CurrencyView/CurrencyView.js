import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../../templates/PageTemplate';
import money from '../../assets/money.jpg';
import rates from '../../data/data';




const StyledTableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    overflow-y: auto;
`;

const StyledTableRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray.gray05};

    &:first-child {
        padding: 12px 40px;
        background-color: ${({ theme }) => theme.colors.gray.gray05};
    }

    &:last-child {
        border: none;
    }

    p {
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
    }
`;

const StyledTableCurrencyWrapper = styled.div`
    display: flex;
    min-width: 25%;

    div {
        width: 50%;
        margin-right: 30px;

        &:last-child {
            margin: 0;
        }
    }
`;


class CurrencyView extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        this.setState ({
            data: [...rates]
        })
    }

    render () {
        return (
            <PageTemplate sideSectionImg={money}>
                <StyledTableWrapper>
                    <StyledTableRow>
                        <div><p>Waluta</p></div>
                        <StyledTableCurrencyWrapper>
                            <div><p>Kupno</p></div>
                            <div><p>Sprzedaż</p></div>
                        </StyledTableCurrencyWrapper>
                    </StyledTableRow>
                    {
                        this.state.data.map(function(item){
                        return (
                            <StyledTableRow key={item.code}>
                                <div>
                                    {item.code}
                                </div>
                                <StyledTableCurrencyWrapper>
                                    <div>{item.bid}</div>
                                    <div>{item.ask}</div>
                                </StyledTableCurrencyWrapper>
                            </StyledTableRow>
                        )
                    })}
                </StyledTableWrapper>
            </ PageTemplate>
        )
    }
}


export default CurrencyView;