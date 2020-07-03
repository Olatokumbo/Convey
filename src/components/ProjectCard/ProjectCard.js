import React from "react";
import { Card, Grid, CardContent, Typography } from "@material-ui/core";
import style from "./ProjectCard.module.css";

const ProjectCard = () => {
  return (
    <div>
      <Grid item component={Card} className={style.projectCard}>
        <CardContent>
          <Typography variant="h3">Project_Card</Typography>
        </CardContent>
      </Grid>
    </div>
  );
}

export default ProjectCard

