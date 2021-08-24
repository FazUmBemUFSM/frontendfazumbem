import React, {useState} from 'react'

import marca from '../../assets/marca.png'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import { TextField, Button, Tab, Tabs, Box} from '@material-ui/core';

import { PageContentMarginHOC, CenterContainerIfMobile, CenterTextIfMobile, VerticalContainerIfMobile,
  CenterContainer,CenterContainer2, FlexEndContainerCenterIfMobile, SpaceBetweenCenterContainerIfMobile, VerticalContainer, 
  FlexEndContainerCenterIfMobileVertical, HorizontalContainer} from "../../styles/generalStyledComponents";
import {Logo} from '../../pages/frontPage/frontpage-styled'

import CreateIcon from '@material-ui/icons/Create';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import PersonIcon from '@material-ui/icons/Person';
import {BotaoAcao} from './companyProfileHeader-styled'

import { useHistory } from "react-router-dom";

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


const CompanyProfileHeader : React.FC = () =>{

    const classes = useStyles();
    const history = useHistory();

    return(
        <div style={{minWidth: "100%"}}>
            <CenterContainer2>
                <VerticalContainerIfMobile >
                    
                    <BotaoAcao onClick={()=>{history.push("/instituicoes/");}}>
                        <CenterContainer2>
                            <PersonIcon />
                            <Typography>Perfil</Typography>
                        </CenterContainer2>
                    </BotaoAcao>
                    
                    <BotaoAcao onClick={()=>{history.push("/instituicoes/newPost");}}>
                        <CenterContainer2>
                            <CreateIcon />
                            Criar Nova Publicação
                        </CenterContainer2>
                    </BotaoAcao>

                    <BotaoAcao>
                        <CenterContainer2>
                            <FormatListBulletedIcon/>
                            Ver Publicações Atuais
                        </CenterContainer2>
                    </BotaoAcao>
                    
                </VerticalContainerIfMobile>
            </CenterContainer2>
            </div>
    )

}

export default CompanyProfileHeader;