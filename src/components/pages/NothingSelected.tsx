import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons"

function NothingSelected() {
    return (
        <div className="bg-gray-200 h-screen flex flex-col justify-items-center text-4xl">
            <div className="mx-auto my-auto justify-items-center items-center">
                <div className="text-center text-indigo-800 italic border-4 border-blue-600 py-4 px-2">
                    <FontAwesomeIcon icon={faSearch} className="fa-2x"/> <br/>
                    Nothing for show, <br/> Please, create new entry...
                </div>
            </div>
        </div>
    )
}

export default NothingSelected;
