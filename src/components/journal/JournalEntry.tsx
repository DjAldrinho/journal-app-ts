import React from 'react';
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import INote from "../../interfaces/INote";
import moment from 'moment';
import {setActiveNote} from "../../actions/note";

function JournalEntry() {

    const dispatch = useDispatch();
    const {notes} = useSelector((state: RootStateOrAny) => state.notes);

    const setNoteActive = (id: string | undefined) => {
        if (id) {
            dispatch(setActiveNote(id))
        }
    }

    return (
        <>
            {
                notes.map((note: INote, i: number) => {
                    return (
                        <div className="flex flex-wrap py-3 px-6 hover:bg-blue-900 hover:text-white
                text-blue-600 font-semibold border-b border-blue-600 cursor-pointer"
                             key={note.id} onClick={() => setNoteActive(note.id)}>
                            <div className="flex flex-row justify-between align-middle items-center">
                                <div className="px-2">{i + 1}.</div>
                                <div className="px-2">{note.title}</div>
                                <div className="px-3 flex flex-col items-center align-middle">
                                    <div>
                                        {moment(note.date).format("DD/MM/YYYY")}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default JournalEntry;
