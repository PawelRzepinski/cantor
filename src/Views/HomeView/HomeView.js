import React from 'react';
// import axios from 'axios';
// import { connect } from 'react-redux';
// import { currencyUpdate } from '../../actions/index.js';
import Calculator from '../../Components/organisms/Calculator/Calculator';
import PageTemplate from '../../templates/PageTemplate';
import SideSectionImg from '../../assets/exchange.jpg';


class HomeView extends React.Component {
    state = {
        data: [],
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