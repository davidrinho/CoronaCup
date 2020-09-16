import React from 'react';
import {BrowserRouter, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Contestants from './components/Contestants';
import Games from './components/Games';
import Scoreboard from './components/Scoreboard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/games" component={Games} />
        <Route exact path="/contestants" component={Contestants} />
        <Route exact path="/scoreboard" component={Scoreboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
