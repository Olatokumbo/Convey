import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import style from "./Navbar.module.css";
const Navbar = () => {
  return (
    <AppBar position="static" className={style.container}>
      <Toolbar variant="dense">
        <div className={style.brand}>
          <Typography variant="h4" color="inherit">
            Convey
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
