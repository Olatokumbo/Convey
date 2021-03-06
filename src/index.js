import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {firebase} from "./firebase/firebase";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import thunk from "redux-thunk";
import {authReducer, projectReducer, notifReducer} from "./store/reducers";
import {CircularProgress} from "@material-ui/core";
import * as actionCreator from "./store/actions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer =combineReducers({
    auth: authReducer,
    project: projectReducer,
    notif: notifReducer
}); 
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "-webkit-fill-available"}}><CircularProgress/></div>, document.getElementById("root"));
firebase.auth().onAuthStateChanged((user)=>{
    ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("root"));
    if(user){
        // console.log(user)
        store.dispatch(actionCreator.loginUser({uid: user.uid, displayName: user.displayName}));
    }
    else{
        store.dispatch(actionCreator.logoutUser());
    }
});