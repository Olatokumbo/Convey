import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {firebase} from "./firebase/firebase";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import thunk from "redux-thunk";
import {authReducer, projectReducer} from "./store/reducers";
import * as actionCreator from "./store/actions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer =combineReducers({
    auth: authReducer,
    project: projectReducer
}); 
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

firebase.auth().onAuthStateChanged((user)=>{
    ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("root"));
    if(user){
        console.log(user.uid);
        store.dispatch(actionCreator.loginUser(user.uid));
    }
    else{
        console.log("logout");
        store.dispatch(actionCreator.logoutUser());
    }
});