import React from 'react';
import Sidebar from "./Sidebar";

function JournalScreen() {
    return (
        <div className="flex bg-white h-screen w-screen">
            <Sidebar/>
            <main className="flex-grow">
                Main
            </main>
        </div>
    )
}

export default JournalScreen;
