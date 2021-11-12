import React from 'react';
import {useDispatch} from "react-redux";
import {startLogout} from "../../actions/auth";

function JournalScreen() {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogout());
    }

    return (
        <div>
            <h1>Journal Screen</h1>
            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    )
}

export default JournalScreen;
