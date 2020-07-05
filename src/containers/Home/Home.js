import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import NotificationCard from "../../components/NotificationCard/NotificationCard";
import * as actionCreator from "../../store/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import style from "./Home.module.css";
const Home = ({ getProject, readProjects }) => {
  useEffect(() => {
    const fetchData = async () => {
      await getProject();
    };
    fetchData();
  }, [getProject]);
  return (
    <div className={style.main}>
      <Grid container className={style.container} justify="center">
        <Grid item container className={style.left} xs={12} md={12}>
          {readProjects.map((data) => (
            <Link key={data.id} style={{textDecoration: "none"}} to={"/project/"+data.id}>
              <ProjectCard
                key={data.id}
                title={data.title}
                author={`${data.displayName}`}
                createdAt={data.createdAt}
              />
            </Link>
          ))}
        </Grid>
        <Grid item container className={style.right} xs={12} md={12}>
          <NotificationCard />
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    readProjects: state.project.projects,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProject: () => dispatch(actionCreator.getProject()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
