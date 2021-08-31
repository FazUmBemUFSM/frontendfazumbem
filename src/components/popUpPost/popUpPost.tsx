import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ImageCompany, ImagePost } from './popUpPost-styles';
import { CenterContainer, CenterTextIfMobile, VerticalContainer } from '../../styles/generalStyledComponents';

export default function PopUpPost(props : any){
  const [open, setOpen] = React.useState(props.open);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    props.onClose(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{fontSize:"2rem"}}>{props.title}</DialogTitle>
        <DialogContent>
        
            <CenterContainer>
                <ImagePost src={props.imgUrl}/>
            </CenterContainer>
        
            <DialogContentText id="alert-dialog-description">
                <CenterTextIfMobile>
                    {props.body}
                </CenterTextIfMobile>
            </DialogContentText>

            <div style={{display: "flex"}}>
                <ImageCompany src={props.companyImgUrl}/>
                <VerticalContainer>
                    <p><b>{props.companyName}</b></p>
                </VerticalContainer>
                
            </div>

        </DialogContent>
      </Dialog>
    </div>
  );
}
