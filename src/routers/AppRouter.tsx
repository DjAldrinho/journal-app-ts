import React from "react";
import {BrowserRouter as Router, Redirect, Switch} from "react-router-dom";
import {PublicRoute} from "./PublicRoute";
import AuthRouter from "./AuthRouter";

function AppRouter() {
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        path="/auth"
                        component={AuthRouter}
                        isAuthenticated={false}/>

                    {/*<PrivateRoute
                        exact
                        isAuthenticated={ false }
                        path="/"
                        component={ JournalScreen }
                    />*/}

                    <Redirect to="/auth/login"/>

                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;
