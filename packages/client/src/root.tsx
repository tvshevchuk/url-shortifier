import React from 'react';
import { Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { LoginPage } from './login-page';
import { AppRoute } from './app-route';
import { MainPage } from './main-page';
import { SignUpPage } from './signup-page';
import "./root.css";

export const Root = () => {
    return <Router history={createBrowserHistory()}> 
    <div className="rootContainer">
    <Switch>
        <AppRoute path={'/login'} publicRoute>
            <LoginPage />
        </AppRoute>
        <AppRoute path={'/signup'} publicRoute>
            <SignUpPage />
        </AppRoute>
        <AppRoute path={'/'} privateRoute>
            <MainPage />
        </AppRoute>
    </Switch>
    </div>
    </Router>
}