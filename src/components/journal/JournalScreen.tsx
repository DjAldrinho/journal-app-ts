import React from 'react';
import Sidebar from "./Sidebar";
import {RootStateOrAny, useSelector} from "react-redux";
import NotesScreen from "../notes/NotesScreen";
import NothingSelected from "../pages/NothingSelected";

function JournalScreen() {

    const {active} = useSelector((state: RootStateOrAny) => state.notes);

    return (
        <div className="flex bg-white h-screen w-screen">
            <Sidebar/>
            <main className="flex-grow">
                {
                    (active)
                        ? (<NotesScreen/>)
                        : (<NothingSelected/>)
                }
            </main>
        </div>
    )
}

export default JournalScreen;
