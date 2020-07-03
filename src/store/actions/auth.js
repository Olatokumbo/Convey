import {firebase} from "../../firebase/firebase";
import * as actionTypes from "./actionTypes";
export const startLogin = (credentials) =>{
    return (dispatch) =>{ 
        firebase.auth().signInWithEmailAndPassword(
            credentials.email, credentials.password)
            .then((data)=>{
            console.log("Sign in", data);
            dispatch({ type: actionTypes.LOGIN_SUCCESS});
        }).catch((err)=>{
            dispatch({type: actionTypes.LOGIN_FAILED, err})
        });
    };
}

export const startSignup = (credentials) =>{
    return (dispatch)=>{
        firebase.auth().createUserWithEmailAndPassword(
            credentials.email, credentials.password)
            .then((data)=>{
            console.log(data)
            dispatch({ type: actionTypes.SIGNUP_SUCCESS });
        })
        .catch((err)=>{dispatch({ type: actionTypes.SIGNUP_FAILED, err });})
    }
}

export const startLogout = () =>{
    return (dispatch) =>{
        firebase.auth().signOut().then(()=>{
            dispatch({ type: actionTypes.LOGOUT});
        })
    } 
}