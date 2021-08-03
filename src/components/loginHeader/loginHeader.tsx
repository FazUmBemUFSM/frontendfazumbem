import React, {useState} from 'react'

import marca from '../../assets/marca.png'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import { TextField, Button, Tab, Tabs, Box} from '@material-ui/core';

import { PageContentMarginHOC, CenterContainerIfMobile, CenterTextIfMobile, VerticalContainerIfMobile,
  CenterContainer,CenterContainer2, FlexEndContainerCenterIfMobile, SpaceBetweenCenterContainerIfMobile, VerticalContainer, 
  FlexEndContainerCenterIfMobileVertical, HorizontalContainer} from "../../styles/generalStyledComponents";
import {Logo} from '../../pages/frontPage/frontpage-styled'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      width: 200,
    },
    textField: {
      margin: "7px 0px",
    },
    button: {
      margin: "7px 2px",
    },
    
  }),
);

const NotLogged = () =>{

    const classes = useStyles();

    return(
        <FlexEndContainerCenterIfMobile>
            
            <FlexEndContainerCenterIfMobileVertical>
              <Typography variant="subtitle2" color="primary">Login da Instituição</Typography>
              <TextField id="outlined-basic" label="Email" variant="outlined" className={classes.textField} style={{width: "300px"}}/>
              <TextField id="outlined-basic" label="Senha" variant="outlined" className={classes.textField} type="password" style={{width: "250px"}}/>
              <HorizontalContainer>
                <Button variant="contained" color="primary" disableElevation className={classes.button}>Criar meu Cadastro</Button>
                <Button variant="contained" color="primary" disableElevation className={classes.button}>Entrar</Button>
              </HorizontalContainer>
              
            </FlexEndContainerCenterIfMobileVertical>
  
        </FlexEndContainerCenterIfMobile>
        
    )
}

const Logged = () =>{

    const classes = useStyles();

    return(
        <FlexEndContainerCenterIfMobile>
            
            <FlexEndContainerCenterIfMobileVertical>
              <Typography variant="subtitle2" color="primary">Você já está logado</Typography>
              <Button variant="contained" color="primary" disableElevation className={classes.button}>Sair</Button>
              
            </FlexEndContainerCenterIfMobileVertical>
  
        </FlexEndContainerCenterIfMobile>
        
    )
}


const LoginHeader : React.FC = () =>{

    const classes = useStyles();

    return(
        <>
            <SpaceBetweenCenterContainerIfMobile>
              <VerticalContainerIfMobile>
                <CenterContainerIfMobile>
                      <Logo className={classes.image} src={marca}/>
                  </CenterContainerIfMobile>
              
                  <CenterTextIfMobile style={{margin: "1em"}}>
                      <Typography variant="subtitle2" color="primary">FAMÍLIAS EM SITUAÇÃO</Typography>
                      <Typography variant="subtitle2" color="primary">DE <b>VULNERABILIDADE</b></Typography>
                      <Typography variant="subtitle2" color="primary">PRECISAM DE <b>SUA AJUDA</b>!</Typography>
                  </CenterTextIfMobile>
              </VerticalContainerIfMobile>
                

              {true ? <Logged/> : <NotLogged/>}




            </SpaceBetweenCenterContainerIfMobile>

        </>
    )

}

export default LoginHeader;