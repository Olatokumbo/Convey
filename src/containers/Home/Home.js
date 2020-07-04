import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Grid } from "@material-ui/core";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import NotificationCard from "../../components/NotificationCard/NotificationCard";
import * as actionCreator from "../../store/actions";
import { connect } from "react-redux";
import style from "./Home.module.css";
const Home = ({getProject}) => {
  useEffect(()=>{
   const fetchData = async() =>{
      await getProject()
    }
    fetchData();
  }, [getProject])
  return (
    <div className={style.main}>
      <Navbar />
      <Grid container className={style.container} justify="center">
        <Grid item container className={style.left} xs={12} md={12}>
          <ProjectCard />
          <ProjectCard />
        </Grid>
        <Grid item container className={style.right} xs={12} md={12}>
          <NotificationCard />
        </Grid>
      </Grid>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    getProject: () => dispatch(actionCreator.getProject()),
  };
};

export default connect(null, mapDispatchToProps)(Home);
