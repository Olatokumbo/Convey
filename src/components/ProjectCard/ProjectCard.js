import React from "react";
import { Card, Grid, CardContent, Typography } from "@material-ui/core";
import style from "./ProjectCard.module.css";

const ProjectCard = ({title, author, createdAt}) => {
  return (
    <div>
      <Grid item component={Card} className={style.projectCard}>
        <CardContent>
          <Typography variant="h4" gutterBottom>{title}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">Posted by {author}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">createdAt: </Typography>
        </CardContent>
      </Grid>
    </div>
  );
}

export default ProjectCard

