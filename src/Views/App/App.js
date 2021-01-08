import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutView from "../AboutView/AboutView";
import ContactView from '../ContactView/ContactView';
import MainTemplate from '../../templates/MainTemplate';
import HomeView from '../HomeView/HomeView';




function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/about" component={AboutView} />
        <Route path="/contact" component={ContactView} />
        <Route path="/contact:id" component={ContactView} />
      </Switch>
    </BrowserRouter>
  )
}


export default App;