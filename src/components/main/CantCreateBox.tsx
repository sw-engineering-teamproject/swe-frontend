import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'
interface LogoutModalProps {
  checkOpen: boolean;
  handleClose: () => void;
  isDuplicated: boolean;
}

const CanSignUpBox: React.FC<LogoutModalProps> = ({ checkOpen, handleClose, isDuplicated }) => {
    return (
      <Dialog open={checkOpen} onClose={handleClose}>
        <DialogTitle>{"닉네임 중복 확인 필요"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            닉네임 중복 확인해주세요
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    )
  }
  

export default CanSignUpBox;