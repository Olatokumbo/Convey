import React from "react";
import {TextField, Button, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import style from "./Signin.module.css";
import logo from "../../assets/images/logo.png";
import {connect} from "react-redux";
import * as actionCreator from "../../store/actions";
const Signin = ({login}) => {
  return (
    <div className={style.main}>
      <div className={style.left}></div>
      <div className={style.right}>
      <div className={style.mainContent}>
      <img className={style.logo} src={logo} alt="logo"/>
      <Typography className={style.header} color="textSecondary" variant="h2">Sign In</Typography>
      <Button className={style.googleBtn} variant="contained" color="primary" onClick={login}>Sign in with Google</Button>
      <Typography className={style.divider} variant="body1" color="textSecondary">Or</Typography>
        <form className={style.form}> 
          <TextField className={style.input} type="text" label="Username" variant="outlined" size="medium" />
          <TextField className={style.input} type="password" label="Password" variant="outlined" size="medium"/>
          <Button className={style.signin} variant="contained">Sign in</Button>
        </form>
        <Typography variant='body2' style={{textAlign: "center"}}>Don't have an Account? <Link className={style.a} to="/signup">Sign up</Link></Typography>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) =>{
    return{
      login: () => dispatch(actionCreator.startLogin())
    }
}

export default connect(null, mapDispatchToProps)(Signin);
