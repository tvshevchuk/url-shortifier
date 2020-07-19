import React from 'react';
import { useStore } from './context';
import { RouteProps, Redirect, Route } from 'react-router-dom';
import { LoginStatus } from './login-page/login-view-store';

interface AppRouteProps extends RouteProps {
    privateRoute?: boolean;
    publicRoute?: boolean;
}

export const AppRoute = ({ privateRoute, publicRoute, ...props }: AppRouteProps) => {
    const { loginViewStore } = useStore();

    if (privateRoute && loginViewStore.loginStatus === LoginStatus.loggedOut) {
        return <Redirect to="/login" />
    }

    if (publicRoute && loginViewStore.loginStatus === LoginStatus.loggedIn) {
        return <Redirect to="/" />
    }

    return <Route {...props} />
}