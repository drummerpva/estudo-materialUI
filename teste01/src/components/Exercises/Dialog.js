import React,{useState} from 'react';
import {Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Fab
} from '@material-ui/core';

import {Add as AddIcon} from '@material-ui/icons';

import Form from '../Form';




export default ({muscles, onCreate}) =>{
  const [open, setOpen] = useState(false);


  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }



  return(
    <>
      <Fab color="primary" size="small" onClick={handleOpen} >
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          Create a new exercise
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the form below.
          </DialogContentText>
          <Form muscles={muscles}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary" variant="contained" >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
;
