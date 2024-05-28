import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'
interface LogoutModalProps {
  checkOpen: boolean;
  handleClose: () => void;
  errorMessage: string;
}

const AuthorityBox: React.FC<LogoutModalProps> = ({ checkOpen, handleClose, errorMessage }) => {
    return (
      <Dialog open={checkOpen} onClose={handleClose}>
        <DialogTitle>{"권한 문제"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {errorMessage || "error message"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    )
  }
  

export default AuthorityBox;