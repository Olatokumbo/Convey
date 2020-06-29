import React from "react";
import {TextField, Button, Typography} from "@material-ui/core";
import style from "./Signin.module.css";
import logo from "../../assets/images/logo.png"
const Signin = () => {
  return (
    <div className={style.main}>
      <div className={style.left}></div>
      <div className={style.right}>
      <div className={style.mainContent}>
      <img className={style.logo} src={logo} alt="logo"/>
      <Typography className={style.header} color="textSecondary" variant="h2">Sign in</Typography>
      <Button className={style.googleBtn} variant="contained" color="primary">Sign in with Google</Button>
      <Typography className={style.divider} variant="body1" color="textSecondary">Or</Typography>
        <form className={style.form}> 
          <TextField className={style.input} type="text" label="Username" variant="outlined" size="medium" />
          <TextField className={style.input} type="password" label="Password" variant="outlined" size="medium"/>
          <Button className={style.signin} variant="contained">Sign in</Button>
        </form>
        <Typography variant='body2' style={{textAlign: "center"}}>Don't have an Account? Sign up</Typography>
        </div>
      </div>
    </div>
  );
};

export default Signin;
