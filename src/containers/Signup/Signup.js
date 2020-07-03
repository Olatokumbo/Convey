import React from "react";
import {TextField, Button, Typography} from "@material-ui/core";
import style from "./Signup.module.css";
import logo from "../../assets/images/logo.png";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import * as actionCreator from "../../store/actions";
const Signup = ({signUp, authError}) => {
  const signUpForm = (e) =>{
      e.preventDefault();
      let email = e.target.elements.email.value;
      let password = e.target.elements.password.value;
      // console.log(email, password)
      signUp({email, password});
  } 
  return (
    <div className={style.main}>
      <div className={style.left}></div>
      <div className={style.right}>
      <div className={style.mainContent}>
      <img className={style.logo} src={logo} alt="logo"/>
      <Typography className={style.header} color="textSecondary" variant="h2">Sign Up</Typography>
      <Button className={style.googleBtn} variant="contained" color="primary">Sign up with Google</Button>
      <Typography className={style.divider} variant="body1" color="textSecondary">Or</Typography>
        <form className={style.form} onSubmit={signUpForm}>
            <div className={style.name}>
                {/* <TextField className={style.input} type="text" label="Name" variant="outlined" size="small" /> */}
                { /*<TextField className={style.input} type="text" label="Username" variant="outlined" size="small" /> */}
            </div>
          <TextField name="email" className={style.input} type="email" label="Email" variant="outlined" size="small"/>
            <div className={style.password}>
                <TextField name="password" className={style.input} type="password" label="Password" variant="outlined" size="small"/>
                {/* <TextField className={style.input} type="password" label="Retype Password" variant="outlined" size="small"/> */}
            </div>
          <Button type="submit" className={style.signup} variant="contained">Sign up</Button>
        </form>
        <Typography variant="body2" color="secondary" align="center">{authError}</Typography>
        <Typography variant='body2' style={{textAlign: "center"}}>Already an Account? <Link className={style.a} to="/login">Sign in</Link></Typography>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) =>{
  return{
    authError: state.auth.authError
  }
}


const mapDispatchToProps = (dispatch)=>{
  return{
    signUp: (credentials)=>dispatch(actionCreator.startSignup(credentials))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
