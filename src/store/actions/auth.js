import {googleAuthProvider, firebase} from "../../firebase/firebase";
import * as actionTypes from "./actionTypes";
export const startLogin = () =>{
    return (dispatch) =>{ 
        firebase.auth().signInWithPopup(googleAuthProvider).then(()=>{
            dispatch(login())
        });
    };
}
export const startLogout = () =>{
    return (dispatch) =>{
        firebase.auth().signOut().then(()=>{
            dispatch(logout())
        })
    } 
}

export const login = ()=>{
    return{
        type: actionTypes.LOGIN
    }
}

export const logout = ()=>{
    return{
        type: actionTypes.LOGOUT
    }
}