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
import {BotaoAcao} from './curadoriaHeader-styled'

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


const CuradoriaHeader : React.FC = () =>{

    const classes = useStyles();
    const history = useHistory();

    return(
        <div style={{minWidth: "100%"}}>
            <CenterContainer2>
                <VerticalContainerIfMobile >
                    
                    <BotaoAcao onClick={()=>{history.push("/curadoria/aprovarPubli");}}>
                        <CenterContainer2>
                            <PersonIcon />
                            <Typography>Aprovar Publicação</Typography>
                        </CenterContainer2>
                    </BotaoAcao>
                    
                    <BotaoAcao onClick={()=>{history.push("/curadoria/aprovarInst");}}>
                        <CenterContainer2>
                            <CreateIcon />
                            Aprovar Instituição
                        </CenterContainer2>
                    </BotaoAcao>

                    <BotaoAcao onClick={()=>{history.push("/curadoria/atualizacoes");}}>
                        <CenterContainer2>
                            <FormatListBulletedIcon/>
                            Atualizações Recentes
                        </CenterContainer2>
                    </BotaoAcao>
                    
                </VerticalContainerIfMobile>
            </CenterContainer2>
            </div>
    )

}

export default CuradoriaHeader;