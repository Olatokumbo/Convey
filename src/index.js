import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {firebase} from "./firebase/firebase";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, combineReducers} from "redux";
import {authReducer} from "./store/reducers";
import thunk from "redux-thunk";
const rootReducer =combineReducers({
    auth: authReducer
}) 
const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("root"));

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        console.log("Logged in");
    }
    else{
        console.log("Logged out");
    }
});