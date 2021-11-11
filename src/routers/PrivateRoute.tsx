import React from "react";
import PropTypes from 'prop-types';
import {Redirect, Route} from "react-router-dom";
import IRoute from "../interfaces/IRoute";

export const PrivateRoute = (
    {
        isAuthenticated,
        component,
        ...rest
    }: IRoute
) => {
    return (
        <Route {...rest}>
            {isAuthenticated
                ? React.createElement(component)
                : <Redirect to="/auth/login"/>
            }
        </Route>
    );
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
