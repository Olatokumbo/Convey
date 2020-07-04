import firestore, {firebase} from "../../firebase/firebase";
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
            firestore.collection("users").doc(data.user.uid).set({
                firstName: credentials.firstName,
                lastName: credentials.lastName,
                email: credentials.email
            })
        }).then(()=>{
            dispatch({ type: actionTypes.SIGNUP_SUCCESS });
        }).catch((err)=>{
            dispatch({ type: actionTypes.SIGNUP_FAILED, err });
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

export const loginUser = (uid) =>{
    return(dispatch)=>{
        dispatch({type: "LOGIN_USER", uid})
    }
}
export const logoutUser = () =>{
    return(dispatch)=>{
        dispatch({type: "LOGOUT_USER"})
    }
}