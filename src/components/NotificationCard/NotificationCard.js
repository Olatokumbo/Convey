import React from "react";
import {Card, CardContent, Grid, Typography} from "@material-ui/core";

const NotificationCard = () =>{
    return(
        <div>
        <Grid item component={Card}>
        <CardContent>
          <Typography variant="h3">Notif_Card</Typography>
        </CardContent>
      </Grid>
        </div>
    )
}

export default NotificationCard;