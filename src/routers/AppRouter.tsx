import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Redirect, Switch} from "react-router-dom";
import {PublicRoute} from "./PublicRoute";
import AuthRouter from "./AuthRouter";
import JournalScreen from "../components/journal/JournalScreen";
import {PrivateRoute} from "./PrivateRoute";
import {useDispatch} from "react-redux";
import {firebase} from "../config/firebaseConfig";
import {login} from "../actions/auth";

function AppRouter() {


    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {

        firebase.auth().onAuthStateChanged(async (user: any) => {

            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }

            setChecking(false);

        });

    }, [dispatch, setChecking, setIsLoggedIn])


    if (checking) {
        return (
            <h1>Wait...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        path="/auth"
                        component={AuthRouter}
                        isAuthenticated={isLoggedIn}/>

                    <PrivateRoute
                        exact
                        isAuthenticated={isLoggedIn}
                        path="/"
                        component={JournalScreen}
                    />

                    <Redirect to="/auth/login"/>

                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;
