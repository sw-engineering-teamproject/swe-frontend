import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'
interface LogoutModalProps {
  checkOpen: boolean;
  handleClose: () => void;
}

const CantCreateBox: React.FC<LogoutModalProps> = ({ checkOpen, handleClose }) => {
    return (
      <Dialog open={checkOpen} onClose={handleClose}>
        <DialogTitle>{"권한 문제"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            권한이 없습니다
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    )
  }
  

export default CantCreateBox;