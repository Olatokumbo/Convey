import React from "react";
import {
  Button,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from "@material-ui/core";
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import {connect} from "react-redux";
import * as actionCreator from "../../store/actions";

const AddProjectForm = ({createProject}) => {
    
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const projectForm = (e) =>{
      e.preventDefault();
      let title = e.target.elements.title.value;
      let content = e.target.elements.content.value;
      console.log(title, content);
      createProject({title, content});
      handleClose();
  }
  return (
    <div>
      <IconButton color="default" variant="contained" onClick={handleClickOpen}>
        <AddCircleOutlinedIcon/>
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="sm"
        fullWidth={true}
      >
        <form onSubmit={projectForm}>
        <DialogTitle id="form-dialog-title">Add New Project</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill out the form 
          </DialogContentText>
          <TextField autoFocus margin="dense" name="title" label="Title" type="text" fullWidth/>
          <TextField margin="dense" name="content" label="Content" type="text" fullWidth/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Publish
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (data)=>dispatch(actionCreator.createProject(data))
    }
}

export default connect(null, mapDispatchToProps)(AddProjectForm);
