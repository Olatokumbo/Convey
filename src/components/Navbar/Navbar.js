import React, {useState} from "react";
import { AppBar, Toolbar, Typography, Menu, MenuItem} from "@material-ui/core";
import style from "./Navbar.module.css";
import profile from "../../assets/images/davidO.jpg";
import logo from "../../assets/images/logo.png";
import ControlPointTwoToneIcon from '@material-ui/icons/ControlPointTwoTone';
import * as actionCreator from "../../store/actions";
import {connect} from "react-redux";

const Navbar = ({logout}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
            <ControlPointTwoToneIcon/>
          <div className={style.profile}>
            <Typography
              className={style.profileName}
              variant="body2"
              color="inherit"
            >
              David King
            </Typography>
            <img className={style.profileImage} src={profile} alt="profile" onClick={handleClick} />
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

const mapDispatchToProps = (dispatch) =>{
  return{
    logout: () => dispatch(actionCreator.startLogout())
  }
};

export default connect(null, mapDispatchToProps)(Navbar);
