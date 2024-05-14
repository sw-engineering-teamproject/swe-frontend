import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'
interface LogoutModalProps {
  checkOpen: boolean;
  handleClose: () => void;
  isDuplicated: boolean;
}

const DuplicationBox: React.FC<LogoutModalProps> = ({ checkOpen, handleClose, isDuplicated }) => {
    return (
      <Dialog open={checkOpen} onClose={handleClose}>
        <DialogTitle>{"Nickname Duplication"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {isDuplicated ? 'This nickname already exists' : 'There is no duplicated nickname'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    )
  }
  

export default DuplicationBox;