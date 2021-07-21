import React from "react"

import marca from '../../assets/marca.png'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import { TextField, Button, Tab, Tabs, Box} from '@material-ui/core';

import { PageContentMarginHOC, CenterContainerIfMobile, CenterTextIfMobile, VerticalContainerIfMobile,CenterContainer,CenterContainer2, FlexEndContainerCenterIfMobile, SpaceBetweenCenterContainerIfMobile, VerticalContainer} from "../../styles/generalStyledComponents";
import {Logo} from './frontpage-styled'
import CardCustom from "../../components/card/cardCustom";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      width: 200,
    },
    textField: {
      margin: "10px",
    },
    
  }),
);

const FrontPage : React.FC = () => {
    const classes = useStyles();

    return(
        <PageContentMarginHOC>

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
                

              <FlexEndContainerCenterIfMobile>
                <VerticalContainer>
                  <Typography variant="subtitle2" color="primary">Login da Instituição</Typography>
                  <TextField id="outlined-basic" label="Email" variant="outlined" className={classes.textField}/>
                  <TextField id="outlined-basic" label="Senha" variant="outlined" className={classes.textField}/>
                </VerticalContainer>
              </FlexEndContainerCenterIfMobile>


            </SpaceBetweenCenterContainerIfMobile>
            
            <div style={{ minHeight: "3px", backgroundColor: "#284870", margin: "25px 60px"}}></div>

            <div style={{ minHeight: "500px", backgroundColor: "green", margin: "25px 75px"}}>
              mapa
            </div>

            <CenterContainer>
              <CenterTextIfMobile>
                <Typography variant="subtitle2" color="secondary">CAMPANHAS DE ARRECADAÇÃO</Typography>
              </CenterTextIfMobile>
            </CenterContainer>


            <CenterContainer2>
              <CardCustom/>
              <CardCustom/>
              <CardCustom/>
              <CardCustom/>
              <CardCustom/>
              <CardCustom/>
              <CardCustom/>
              <CardCustom/>
            </CenterContainer2>  
            


        </PageContentMarginHOC>)
}

export default FrontPage;