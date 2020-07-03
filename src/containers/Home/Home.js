import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import NotficationCard from "../../components/NotificationCard/NotificationCard"
import style from "./Home.module.css";
const Home = () => {
  console.log("Hello");
  return (
    <div className={style.main}>
      <Navbar />
      <Grid container className={style.container} justify="center">
        <Grid item container className={style.left} xs={12} md={12}>
          <ProjectCard/>
          <ProjectCard/>
        </Grid>
        <Grid item container className={style.right} xs={12} md={12}>
          <NotficationCard/>
        </Grid>
      </Grid>
    </div>
  );
};
export default Home;
