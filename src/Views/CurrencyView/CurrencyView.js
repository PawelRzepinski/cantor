import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../../templates/PageTemplate';
import money from '../../assets/money.jpg';
import rates from '../../data/data';




const StyledTableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%
`;

const StyledTableRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 50px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray.gray05};
`;

const StyledTableCurrencyWrapper = styled.div`
    display: flex;

    div {
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
                    {this.state.data.map(function(item){
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