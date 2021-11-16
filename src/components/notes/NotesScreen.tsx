import React, {useEffect, useRef} from "react";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import NotesBar from "./NotesBar";
import {useForm} from "../../hooks/useForm";
import {activeNote, startDeleting} from "../../actions/note";
import {removeMsg} from "../../actions/ui";

function NotesScreen() {

    const dispatch = useDispatch();

    const {active} = useSelector((state: RootStateOrAny) => state.notes);
    const {msg} = useSelector((state: RootStateOrAny) => state.ui);
    const [formValues, handleInputChange, reset] = useForm(active);
    const {body, title, id} = formValues;

    const activeId = useRef(active.id);

    useEffect(() => {

        if (active.id !== activeId.current) {
            reset(active);
            activeId.current = active.id;
            dispatch(removeMsg());
        }

    }, [active, dispatch, reset]);

    useEffect(() => {

        dispatch(activeNote(formValues.id, {...formValues}));

    }, [formValues, dispatch]);

    const handleDelete = () => {
        dispatch(startDeleting(id));
    }

    return (
        <div className="h-screen flex flex-col">
            <NotesBar/>
            <div className="ml-4 my-8 h-screen">
                {
                    msg && (
                        <div className="mb-8">
                            <p className="text-green-500 text-2xl">{msg}</p>
                        </div>
                    )
                }

                <div className="mb-16">
                    <input
                        type="text"
                        placeholder="Enter an awesome title"
                        className="outline-none text-3xl placeholder-blue-600 text-blue-600 w-full"
                        autoComplete="off"
                        name="title"
                        value={title}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-16">
                    <textarea
                        placeholder="Enter an awesome body"
                        className="outline-none text-3xl placeholder-blue-600 text-blue-600 resize-none flex-auto w-full"
                        autoComplete="off"
                        name="body"
                        value={body}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div>
                <button onClick={handleDelete}
                        className="bg-red-800 text-white w-full py-4 hover:bg-red-900 shadow-lg">
                    Delete note
                </button>
            </div>
        </div>
    )
}

export default NotesScreen;
