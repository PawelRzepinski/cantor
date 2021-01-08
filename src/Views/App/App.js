import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutView from "../AboutView/AboutView";
import ContactView from '../ContactView/ContactView';
import CurrencyView from '../CurrencyView/CurrencyView';
import HomeView from '../HomeView/HomeView';




function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/currency" component={CurrencyView} />
        <Route path="/about" component={AboutView} />
        <Route path="/contact" component={ContactView} />
      </Switch>
    </BrowserRouter>
  )
}


export default App;