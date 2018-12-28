import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import './App.scss'
import Login from "./components/Login";
class App extends Component {
  render() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" name="Login Page" component={Login} />
            </Switch>
        </HashRouter>
    );
  }
}

export default App;
