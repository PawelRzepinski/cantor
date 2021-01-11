import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainTemplate from '../../templates/MainTemplate';
import GlobalStyle from '../../theme/GlobalStyle';
import AboutView from "../AboutView/AboutView";
import ContactView from '../ContactView/ContactView';
import CurrencyView from '../CurrencyView/CurrencyView';
import HomeView from '../HomeView/HomeView';




function App() {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/currency" component={CurrencyView} />
          <Route path="/about" component={AboutView} />
          <Route path="/contact" component={ContactView} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  )
}


export default App;