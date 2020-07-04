import firestore from "../../firebase/firebase";
import * as actionTypes from "./actionTypes";

export const createProject = (project) =>{
    return (dispatch)=>{
        firestore.collection("projects").add({
            authorFirstName: "David",
            authorLastName: "Odesola",
            ...project
        }).then((data)=>{
            dispatch({type: actionTypes.CREATE_PROJECT, data })
        })
    }
};

export const getProject = () =>{
    return (dispatch) =>{
        const array = [];
        firestore.collection("projects").get().then((snapshot)=>{
            snapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                array.push({id: doc.id, ...doc.data()})
             });
            dispatch({type: actionTypes.GET_PROJECT, data: array})
        })
    }
}