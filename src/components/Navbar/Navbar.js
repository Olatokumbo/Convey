import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import style from "./Navbar.module.css";
import profile from "../../assets/images/davidO.jpg";
import logo from "../../assets/images/logo.png";
import NotificationsIcon from '@material-ui/icons/Notifications';
const Navbar = () => {
  return (
    <AppBar position="static" className={style.container}>
      <Toolbar variant="dense" className={style.toolbar}>
        <div className={style.brand}>
        <img className={style.logo}src={logo} alt="logo"/>
          <input
            className={style.searchInput}
            placeholder="Search in Convey..."
          />
        </div>
        <div className={style.utility}>
            <NotificationsIcon/>
          <div className={style.profile}>
            <Typography
              className={style.profileName}
              variant="body2"
              color="inherit"
            >
              David King
            </Typography>
            <img className={style.profileImage} src={profile} alt="profile" />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
