import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { CenterContainer, CenterTextIfMobile, HorizontalContainer, HorizontalContainerIfMobile, HorizontalContainerJustCenterAlignCenter, VerticalContainer, VerticalContainerIfMobile} from '../../styles/generalStyledComponents';
import { ActionButton, ButtonsArea, InfosArea, PhotoArea, PostagemContainer, HorizontalContainerIfMobile2, NetworkButton, AproveButton, DeleteButton} from './postagem-styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  root: {
    maxWidth: 325,
    margin: 15,
    backgroundColor:"#F5F5F5",
    borderRadius: "15px"
  },
  media: {
    height: 280,
    width: 280,
    margin: "10px 10px 0px 10px",
    borderRadius: "20px"
  },
});

const CadaPostagemParaAprovacao : React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <PostagemContainer>
        <HorizontalContainerJustCenterAlignCenter>
          <VerticalContainerIfMobile>
            <PhotoArea src="https://3.bp.blogspot.com/-mBSITn56Qrc/V-k6ktN0MeI/AAAAAAAADB0/VoXqxQtgSCITKp90bA_IiCcCBFyi9aKVwCLcB/s1600/casa-003.jpg"/>
              
            <InfosArea style={{fontFamily:"Roboto"}}>
              <div style={{fontSize: "2rem", margin:"0dpx 0px 0px 10px"}}>Titulo da Publicação</div>
              <div style={{fontSize: "1rem", marginLeft:"10px"}}><b>Nome da Instituição</b> - Esse é o status da publicação.</div>
              <div style={{fontSize: "1rem", marginLeft:"10px", marginTop:"10px"}}>Esse é o inicio do texto da publi...</div>
              <div style={{display: "flex"}}>
                  
                <NetworkButton style={{width: "50px", height: "50px", margin:"10px"}}>
                  <FacebookIcon style={{width: "50px", height:"50px"}}></FacebookIcon>
                </NetworkButton>
                <NetworkButton style={{width: "50px", height: "50px", margin:"10px"}}>
                  <InstagramIcon style={{width: "50px", height:"50px"}}></InstagramIcon>
                </NetworkButton>
                <NetworkButton style={{width: "50px", height: "50px", margin:"10px"}}>
                  <WhatsAppIcon style={{width: "50px", height:"50px"}}></WhatsAppIcon>
                </NetworkButton>
    
              </div>
            </InfosArea>
            <ButtonsArea>
            
              <HorizontalContainerIfMobile2>
                <ActionButton>Ver</ActionButton>
                <HorizontalContainer>
                  <AproveButton><ThumbUpIcon/></AproveButton>
                  <DeleteButton><DeleteIcon/></DeleteButton>
                </HorizontalContainer>
                
              </HorizontalContainerIfMobile2>
                
              
              
            </ButtonsArea>
          </VerticalContainerIfMobile>
          
        </HorizontalContainerJustCenterAlignCenter>
      </PostagemContainer>
    </>
  );
}

export default CadaPostagemParaAprovacao;