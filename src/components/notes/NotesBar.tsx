import React from "react";
import moment from "moment";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {startSaveNote} from "../../actions/note";

function NotesBar() {


    const dispatch = useDispatch();

    const {active} = useSelector((state: RootStateOrAny) => state.notes);

    const handleSave = () => {
        dispatch(startSaveNote(active));
    }

    return (
        <div className="w-full py-2 bg-gray-800 shadow-sm">
            <div className="flex flex-row ml-2 justify-between align-middle items-center text-blue-600">
                <div>
                    Today: {moment().format("MMMM DD, YYYY")}
                </div>
                <div className="flex flex-row">
                    <div className="px-4 py-2 hover:text-white cursor-pointer mr-2" onClick={handleSave}>
                        Save
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotesBar;
