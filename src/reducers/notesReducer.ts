import {types} from "../types/types";


const initialState = {
    notes: [],
    active: null
}

export const notesReducer = (state: any = initialState, action: any) => {
    switch (action.type) {

        case types.loadNotes:
            return {
                ...state,
                notes: [...action.payload]
            }
        case  types.addNote:
            return {
                ...state,
                notes: [action.payload, ...state.notes]
            }
        case types.activeNote:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.updateNote:
            return {
                ...state,
                notes: state.notes.map(
                    (note: any) => note.id === action.payload.id
                        ? action.payload.note
                        : note
                )
            }
        case types.deleteNote:
            return {
                ...state,
                active: null,
                notes: state.notes.filter((note: any) => note.id !== action.payload)
            }

        case types.notesLogoutCleaning:
            return {
                ...state,
                active: null,
                notes: []
            }

        default:
            return state
    }
}
