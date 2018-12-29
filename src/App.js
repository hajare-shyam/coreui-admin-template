import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import './App.scss'
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Admin from "./components/admin/Admin";
import User from "./components/user/User";
class App extends Component {
  render() {
      const isAdmin = true;
    return (
        <HashRouter>
            <div>
                <Switch>
                    <Route exact path="/auth/register" name="Register Page" component={SignUp} />
                    <Route exact path="/auth/login" name="Login Page" component={SignIn} />
                </Switch>

                { isAdmin ? <Admin/> : <User/> }
            </div>

        </HashRouter>
    );
  }
}

export default App;
