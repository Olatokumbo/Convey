import React from "react";
import Signin from "./containers/Signin/Signin";
import Signup from "./containers/Signup/Signup"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from  "./PublicRoute"
import style from "./App.module.css";
const App = () => {
  return (
    <div className={style.container}>
      <Router>
        <Switch>
          <PublicRoute exact={true} path="/" component={Signin} />
          <PrivateRoute path="/home" component={Home} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
