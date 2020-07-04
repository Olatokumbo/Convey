import React from "react";
import Signin from "./containers/Signin/Signin";
import Signup from "./containers/Signup/Signup"
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import ProjectDetail from "./containers/ProjectDetail/ProjectDetail";
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
          <PrivateRoute path="/project/:id" component={ProjectDetail} />
          <PublicRoute path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
