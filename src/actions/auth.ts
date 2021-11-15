import {firebase, googleAuthProvider} from "../config/firebaseConfig";
import {finishLoading, setError, startLoading} from "./ui";
import {types} from "../types/types";
import {noteLogout} from "./note";


export const loginWithEmailAndPassword = (email: string, password: string) => {
    return (dispatch: any) => {

        dispatch(startLoading());

        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({user}: any) => {
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading());
            })
            .catch(e => {
                console.log(e);
                dispatch(finishLoading());
                dispatch(setError("User or password incorrect"))
            });
    }
}

export const registerWithEmailAndPassword = (email: string, password: string, name: string) => {
    return (dispatch: any) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({user}: any) => {
                await user.updateProfile({displayName: name});

                dispatch(login(user.uid, user.displayName))

            })
            .catch(e => {
                console.log(e);
            });
    }
}

export const loginWithGoogle = () => {
    return (dispatch: any) => {

        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user}: any) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            });
    }
}

export const startLogout = () => {
    return async (dispatch: any) => {
        await firebase.auth().signOut();
        dispatch(logout());
        dispatch(noteLogout());
    }
}

export const logout = () => ({
    type: types.logout
});

export const login = (uid: string, displayName: string) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});
