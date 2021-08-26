import React, {useState,useEffect} from 'react'
import LoginHeader from '../../../../components/loginHeader/loginHeader';
import { CenterButLeftTextIfMobile, CenterContainer, CenterContainer2, CenterContainerIfMobile, 
    FlexStartVerticalContainerCenterIfMobile, HorizontalContainer, 
    VerticalContainer, VerticalContainerIfMobile } from '../../../../styles/generalStyledComponents'


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
        margin: "15px 0px"
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


const CadastrarInst : React.FC = () =>{

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
                <Typography variant="h4" color="primary" className={classes.title}>Cadastrar Instituição</Typography>
            </div>                  

            <br></br>
           
            

                <VerticalContainer>
                    <Typography variant="h4" style={{textAlign:"center"}} className={classes.title}>Informações da Instituição</Typography>
                    <VerticalContainerIfMobile>
                        <TextField id="outlined-basic" label="Nome" variant="outlined" style={{margin: "7px 3px"}}/>
                        <TextField id="outlined-basic" label="Email" variant="outlined" style={{margin: "7px 3px"}}/>
                    </VerticalContainerIfMobile>

                    <hr style={{width:"90%", margin: "25px 10px"}}></hr>

                    <Typography variant="h4" style={{textAlign:"center"}} className={classes.title}>Definição de Senha</Typography>
                    <VerticalContainerIfMobile>
                        <TextField id="outlined-basic" label="Senha" variant="outlined" style={{margin: "7px 3px"}}/>
                        <TextField id="outlined-basic" label="Confirmar Senha" variant="outlined" style={{margin: "7px 3px"}}/>
                    </VerticalContainerIfMobile>

                    <hr style={{width:"90%", margin: "25px 10px"}}></hr>

                    <Typography variant="h4" style={{textAlign:"center"}} className={classes.title}>Endereço</Typography>
                    <VerticalContainerIfMobile>
                        <TextField id="outlined-basic" label="Rua" variant="outlined" style={{margin: "7px 3px"}}/>
                        <TextField id="outlined-basic" label="Numero" variant="outlined" style={{margin: "7px 3px"}}/>
                        <TextField id="outlined-basic" label="Cidade" variant="outlined" style={{margin: "7px 3px"}}/>
                        <TextField id="outlined-basic" label="CEP" variant="outlined" style={{margin: "7px 3px"}}/>
                    </VerticalContainerIfMobile>

                    <hr style={{width:"90%", margin: "25px 10px"}}></hr>

                    <Typography variant="h4" style={{textAlign:"center"}} className={classes.title}>Descrição</Typography>
                    <TextField
                        id="outlined-multiline-static"
                        label="Descrição"
                        multiline
                        rows={10}
                        className={classes.textField}
                        defaultValue={description}
                        variant="outlined"
                    />

                </VerticalContainer>


            
            

            
        

        </div>
    )
}
export default CadastrarInst;