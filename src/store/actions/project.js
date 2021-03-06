import firestore, {firebase} from "../../firebase/firebase";
import * as actionTypes from "./actionTypes";

export const createProject = (project) =>{
    return (dispatch)=>{
        var user = firebase.auth().currentUser;
        const projectData = {
            ...project,
            displayName: user.displayName,
            authorId: user.uid,
            createdAt: new Date()
        };
        firestore.collection("projects").add({
            ...projectData
        }).then((data)=>{
            // console.log(data);
            dispatch({type: actionTypes.CREATE_PROJECT, data: {id: data.id, ...projectData}})
        })
    }
};

export const getProject = () =>{
    return (dispatch) =>{
        const array = [];
        firestore.collection("projects").get().then((snapshot)=>{
            snapshot.forEach((doc) => {
                // console.log(`${doc.id} => ${doc.data()}`);
                array.push({id: doc.id, ...doc.data()})
             });
        }).then(()=>{
            dispatch({type: actionTypes.GET_PROJECT, data: array})
        })
    }
}