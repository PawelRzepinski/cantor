import React from 'react';
import Calculator from '../../Components/organisms/Calculator/Calculator';
import PageTemplate from '../../templates/PageTemplate';
import SideSectionImg from '../../assets/exchange.jpg';
import axios from 'axios';


class HomeView extends React.Component {
    state = {
        data: [],
    }

    componentDidMount () {
        axios.get('http://api.nbp.pl/api/exchangerates/tables/c/')
        .then(({ data }) => {
            this.setState({ data: [data[0].rates] })
        })
        .catch((error) => alert('Coś poszło nie'))
    }


    render() {
        return (
            <PageTemplate sideSectionImg={SideSectionImg}>
                <Calculator rates={ this.state.data } />
            </PageTemplate>
        )
    }
}


export default HomeView;