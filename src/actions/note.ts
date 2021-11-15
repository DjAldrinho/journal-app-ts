import {db} from "../config/firebaseConfig";
import {types} from "../types/types";
import INote from "../interfaces/INote";

export const startNewNote = () => {
    return async (dispatch: any, getState: any) => {

        const {uid} = getState().auth;

        const newNote: INote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        try {
            const doc: any = await db.collection(`${uid}/journal/notes`).add(newNote);

            dispatch(activeNote(doc.id, newNote));
            dispatch(addNewNote(doc.id, newNote));

        } catch (error) {
            console.log(error);
        }
    }
}

export const activeNote = (id: number, note: INote) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
});

export const addNewNote = (id: number, note: INote) => ({
    type: types.notesAddNew,
    payload: {
        id, ...note
    }
});

export const noteLogout = () => ({
    type: types.notesLogoutCleaning
});

export const startLoadingNotes = (uid: string) => {
    return async (dispatch: any) => {

        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));

    }
}

export const setNotes = (notes: INote[]) => ({
    type: types.notesLoad,
    payload: notes
});

export const loadNotes = async (uid: string) => {

    const notesSnap = await db.collection(`${uid}/journal/notes`).get();
    const notes: INote[] = [];

    notesSnap.forEach((snapHijo: any) => {
        notes.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });

    return notes;
}
