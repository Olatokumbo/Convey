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
            // console.log(data)
            var user = firebase.auth().currentUser;
            user.updateProfile({
                displayName: `${credentials.firstName} ${credentials.lastName}`
            }).then(()=>{
                dispatch({ type: actionTypes.SIGNUP_SUCCESS, uid: data.user.uid, displayName: data.user.displayName });
            }).catch((err)=>{
                dispatch({ type: actionTypes.SIGNUP_FAILED, err });
            })
        })
    }
}


export const startLogout = () =>{
    return (dispatch) =>{
        firebase.auth().signOut().then(()=>{
            dispatch({ type: actionTypes.LOGOUT});
        })
    } 
}

export const loginUser = (user) =>{
    return(dispatch)=>{
        dispatch({type: "LOGIN_USER", uid: user.uid, displayName: user.displayName})
    }
}
export const logoutUser = () =>{
    return(dispatch)=>{
        dispatch({type: "LOGOUT_USER"})
    }
}