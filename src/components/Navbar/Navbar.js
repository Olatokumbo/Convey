import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Menu, MenuItem } from "@material-ui/core";
import style from "./Navbar.module.css";
import profile from "../../assets/images/davidO.jpg";
import logo from "../../assets/images/logo.png";
import * as actionCreator from "../../store/actions";
import AddProjectForm from "../AddProjectForm/AddProjectForm";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = ({ logout, displayName }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="sticky" className={style.container}>
      <Toolbar variant="dense" className={style.toolbar}>
        <div className={style.brand}>
          <Link style={{ textDecoration: "none" }} to="/home">
            <img className={style.logo} src={logo} alt="logo" />
          </Link>
          <input
            className={style.searchInput}
            placeholder="Search in Convey..."
          />
        </div>
        <div className={style.utility}>
          <AddProjectForm />
          <div className={style.profile}>
            <Typography
              className={style.profileName}
              variant="body2"
              color="inherit"
            >
              {displayName}
            </Typography>
            <img
              className={style.profileImage}
              src={profile}
              alt="profile"
              onClick={handleClick}
            />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              getContentAnchorEl={null}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Settings</MenuItem>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) =>{
  return{
    displayName: state.auth.displayName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actionCreator.startLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
