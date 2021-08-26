import React, {useState,useEffect} from 'react'
import LoginHeader from '../../../../components/loginHeader/loginHeader';
import { CenterButLeftTextIfMobile, CenterContainer, CenterContainer2, CenterContainerIfMobile, 
    FlexStartVerticalContainerCenterIfMobile, HorizontalContainer, 
    VerticalContainer, VerticalContainerIfMobile } from '../../../../styles/generalStyledComponents'
import { BotaoAcao, ImagemPrincipalInstituicao } from './aprovarPubli-styled';

import CreateIcon from '@material-ui/icons/Create';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import PersonIcon from '@material-ui/icons/Person';
import { FormControl, FormControlLabel, Typography } from '@material-ui/core';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

import CompanyProfileHeader from '../../../../components/companyProfileHeader/companyProfileHeader';
import CadaPostagem from '../../../../components/postagem/postagem';
import CuradoriaHeader from '../../../../components/curadoriaHeader/curadoriaHeader';
import CadaPostagemParaAprovacao from '../../../../components/postagemParaAprovacao/postagem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    textField: {
        width: "80%",
    },
    title:{
        margin: "15px 0px"
    },
    marginBetweenChecks:{
        margin: "10px 15px"
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',

    },
    dateInput: {
        width: "180px",
        margin: "10px 10px 25px 10px"
    }

  }),
);


const AprovarPubli : React.FC = () =>{

    const classes = useStyles();
    const [description,setDescription] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ");
    const [isPermanentPost, setIsPermanentPost] = useState(true)

    const [isMobile, setIsMobile] = useState(window.innerWidth < 720)
 
    //choose the screen size 
    const handleResize = () => {
      if (window.innerWidth < 720) {
          setIsMobile(true)
      } else {
          setIsMobile(false)
      }
    }
    
    // create an event listener
    useEffect(() => {
      window.addEventListener("resize", handleResize)
    },[])

    return(
        <div>

            <LoginHeader/>

            <div style={{ minHeight: "2px", backgroundColor: "#284870", margin: "25px 60px"}}></div>

            <CuradoriaHeader/>

            <div style={{ minHeight: "2px", backgroundColor: "#284870", margin: "25px 60px"}}></div>

            <div style={{textAlign:"center"}}>
                <Typography variant="h4" color="primary" className={classes.title}>Minhas Publicações Atuais</Typography>
            </div>                  

            <CenterContainer2>
                <CadaPostagemParaAprovacao/>
                <CadaPostagemParaAprovacao/>
                <CadaPostagemParaAprovacao/>
                <CadaPostagemParaAprovacao/>
            </CenterContainer2>
            

            
        

        </div>
    )
}
export default AprovarPubli;