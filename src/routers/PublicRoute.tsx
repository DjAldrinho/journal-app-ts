import React from "react";
import PropTypes from 'prop-types';
import {Redirect, Route} from "react-router-dom";
import IRoute from "../interfaces/IRoute";

export const PublicRoute = (
    {
        isAuthenticated,
        component,
        ...rest
    }: IRoute
) => {
    return (
        <Route {...rest}>
            {isAuthenticated
                ? <Redirect to="/"/>
                : React.createElement(component)
            }
        </Route>
    );
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
