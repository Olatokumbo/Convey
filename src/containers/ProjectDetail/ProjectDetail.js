import React from "react";
import { Card, CardContent, Grid, Typography, Divider } from "@material-ui/core";
import {connect} from "react-redux";
import style from "./ProjectDetail.module.css";
const ProjectDetail = ({project}) => {
  return (
    <div className={style.main}>
      <Grid container justify="center">
        <Grid item component={Card} md={8} xs={12}>
        <CardContent>
        <Typography variant="h5" gutterBottom>{project[0].title}</Typography>
        <Typography variant="body1" gutterBottom component="p">{project[0].content}</Typography>
        <Divider />
        <Typography variant="body2" color="textSecondary" component="p">{`Posted by ${project[0].displayName}`}</Typography> 
        <Typography variant="body2" color="textSecondary" component="p">Createdby</Typography>
        </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state, ownProps) =>{
  const id = ownProps.match.params.id;
  const projects = state.project.projects;
  const project = projects ? projects.filter((data)=>data.id===id) : null;
  return{
    project
  }
}

export default connect(mapStateToProps)(ProjectDetail);
