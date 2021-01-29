import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/index.js';
import MainTemplate from '../../templates/MainTemplate';
import AboutView from "../AboutView/AboutView";
import ContactView from '../ContactView/ContactView';
import CurrencyView from '../CurrencyView/CurrencyView';
import HomeView from '../HomeView/HomeView';
import LoginView from '../LoginView/LoginView';



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/currency" component={CurrencyView} />
            <Route path="/about" component={AboutView} />
            <Route path="/contact" component={ContactView} />
            <Route path="/login" component={LoginView} />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  )
}


export default App;