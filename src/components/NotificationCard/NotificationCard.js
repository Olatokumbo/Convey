import React , {useEffect} from "react";
import {Card, CardContent, Grid, Typography} from "@material-ui/core";
import style from "./NotificationCard.module.css";
import {connect} from "react-redux";
import * as actionCreator from "../../store/actions"
import moment from "moment";
const NotificationCard = ({getNotifications, readNotifications}) =>{
    useEffect(()=>{
      const fetchNotifications = async ()=>{
        await getNotifications();
      }
      fetchNotifications();
    }, [getNotifications])
    return(
        <div>
        <Grid item component={Card}>
        <CardContent className={style.content}>
          <Typography variant="h5" gutterBottom >Notification</Typography>
          {readNotifications.map((data, index)=><Typography key={index}>{data.user} {data.content} {moment(data.time.toDate()).calendar()}</Typography>)}
        </CardContent>
      </Grid>
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    readNotifications: state.notif.notifications,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNotifications: () => dispatch(actionCreator.getNotification()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationCard);