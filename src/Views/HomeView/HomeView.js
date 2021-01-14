import React from 'react';
import Calculator from '../../Components/organisms/Calculator/Calculator';
import rates from '../../data/data';
import PageTemplate from '../../templates/PageTemplate';
import SideSectionImg from '../../assets/exchange.jpg';


// Miejsce pobrania danych z NBP API --> przekazać dane do komponentów zawartych na stronie (w tym widoku)



class HomeView extends React.Component {
    state = {
        data: [], // dane z Api
        calculatorBuy: true,
    }


    render() {
        return (
            <PageTemplate sideSectionImg={SideSectionImg}>
                <Calculator />
            </PageTemplate>
        )
    }
}


export default HomeView;