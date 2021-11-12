import React from 'react';
import AppRouter from '../routers/AppRouter';
import {Provider} from "react-redux";
import {store} from "../config/storeConfig";

function JournalApp() {
    return (
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    );
}

export default JournalApp;
