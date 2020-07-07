import firestore from "../../firebase/firebase";
import * as actionTypes from "./actionTypes";

export const getNotification = () => {
    const array = [];
    return(dispatch)=>{
            firestore.collection("notifications").orderBy("time", 'desc').limit(3).onSnapshot(function(querySnapshot) {
                querySnapshot.docs.forEach(function(doc) {
                    array.push(doc.data());
                });
                console.log(array);
                dispatch({type: actionTypes.FETCH_NOTIFICATION, notifications: array})
            })
      }
}