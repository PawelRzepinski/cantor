import React from 'react';
import Calculator from '../../Components/organisms/Calculator/Calculator';
import PageTemplate from '../../templates/PageTemplate';
import SideSectionImg from '../../assets/exchange.jpg';



const HomeView = () => (
    <PageTemplate sideSectionImg={SideSectionImg}>
        <Calculator />
    </PageTemplate>
)


export default HomeView;