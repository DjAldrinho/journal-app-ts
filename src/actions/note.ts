import {db} from "../config/firebaseConfig";
import {types} from "../types/types";
import INote from "../interfaces/INote";
import {setMessage} from "./ui";

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

export const activeNote = (id: string, note: INote) => ({
    type: types.activeNote,
    payload: {
        id,
        ...note
    }
});

export const addNewNote = (id: string, note: INote) => ({
    type: types.addNote,
    payload: {
        id, ...note
    }
});

export const setActiveNote = (id: string) => {
    return async (dispatch: any, getState: any) => {

        const {uid} = getState().auth;

        let loadNote: INote = {
            id: '',
            title: '',
            body: '',
            date: 0
        };

        try {
            const note: any = await db.doc(`${uid}/journal/notes/${id}`).get();

            loadNote = {
                id: note.id,
                ...note.data()
            }

            dispatch(activeNote(note.id, loadNote));
        } catch (error) {
            console.log(error);
        }
    }
}

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
    type: types.loadNotes,
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


export const startSaveNote = (note: INote) => {
    return async (dispatch: any, getState: any) => {

        const {uid} = getState().auth;

        const noteToFirestore: INote = {...note};

        delete noteToFirestore.id;

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);

        dispatch(refreshNote(note.id, noteToFirestore));

        dispatch(setMessage(`${note.title} updated!`));
    }
}

export const refreshNote = (id: string | undefined, note: INote) => ({
    type: types.updateNote,
    payload: {
        id,
        note: {
            id,
            ...note
        }
    }
});

export const startDeleting = (id: string) => {
    return async (dispatch: any, getState: any) => {

        const uid = getState().auth.uid;

        await db.doc(`${uid}/journal/notes/${id}`).delete();

        dispatch(deleteNote(id));

        dispatch(setMessage(`Note deleted!`));

    }
}

export const deleteNote = (id: string) => ({
    type: types.deleteNote,
    payload: id
});

