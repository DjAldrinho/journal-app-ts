import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar, faSignOutAlt} from "@fortawesome/free-solid-svg-icons"
import React from "react";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {startLogout} from "../../actions/auth";
import {startNewNote} from "../../actions/note";


function Sidebar() {

    const dispatch = useDispatch();
    const {name} = useSelector((state: RootStateOrAny) => state.auth);

    const handleLogout = () => {
        dispatch(startLogout());
    }

    const handleNewEntry = () => {
        dispatch(startNewNote());
    }

    return (
        <div className="w-64 bg-gray-800 border-r-4 border-blue-600 shadow-lg">
            <div
                className="flex flex-col justify-center items-center py-4 text-white text-center font-semibold text-3xl italic">
                <div><span>Journal App</span></div>
                <div className="text-base mt-1.5">
                    {name}
                </div>
                <div className="text-base cursor-pointer hover:text-gray-200" onClick={handleLogout}>
                    Logout <FontAwesomeIcon icon={faSignOutAlt}/>
                </div>
            </div>
            <div className="mt-2 border-b border-blue-600">
                <div onClick={handleNewEntry} className="block py-3 px-6 hover:bg-blue-900 hover:text-white cursor-pointer
                text-blue-600 font-semibold border-blue-600">
                    <FontAwesomeIcon icon={faCalendar}/> New Entry
                </div>
            </div>
            <div>
                <a href="#" className="block py-3 px-6 hover:bg-blue-900 hover:text-white
                text-blue-600 font-semibold border-b border-blue-600">
                    Google
                </a>
                <a href="#" className="block py-3 px-6 hover:bg-blue-900 hover:text-white
                text-blue-600 font-semibold border-b border-blue-600">
                    Facebook
                </a>
            </div>
        </div>
    )
}

export default Sidebar;

