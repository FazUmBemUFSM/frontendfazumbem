import React from 'react';
import {Router, NavLink } from 'react-router-dom';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SchoolIcon from '@material-ui/icons/School';

import {CenterContainer, HorizontalContainer,CenterContainerIfMobile} from '../../styles/generalStyledComponents'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      
    },
    toolBar: {
      display: "flex",
      flexWrap: "wrap"
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    selectTab: {
      marginRight: theme.spacing(2),
      
    },
  }),
);

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">

        <CenterContainerIfMobile>
          <Toolbar variant="dense" className={classes.toolBar}>

            
            <CenterContainer>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <SchoolIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.selectTab}>
                Faz um Bem!
              </Typography>
            </CenterContainer>

            <CenterContainer>
              <NavLink to="/" style={{textDecoration: "none", color: "inherit"}}>
                <Typography className={classes.selectTab} variant="subtitle1" color="inherit">
                  Campanha
                </Typography>
              </NavLink>           

              <NavLink to="/instituicoes" style={{textDecoration: "none", color: "inherit"}}>
                <Typography className={classes.selectTab} variant="subtitle1" color="inherit">
                  Instituições
                </Typography>
              </NavLink> 
              
              <NavLink to="/sobre" style={{textDecoration: "none", color: "inherit"}}>
                <Typography className={classes.selectTab} variant="subtitle1" color="inherit">
                  Sobre
                </Typography>
              </NavLink> 

            </CenterContainer>


          </Toolbar>
        </CenterContainerIfMobile>
      </AppBar>

    </div>
  );
}
