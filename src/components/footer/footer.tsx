import React, {useState} from 'react';
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

export default function Footer() {
  const classes = useStyles();

  return (
    <div style={{width:"100%", backgroundColor:"#284870", height:"100px"}}>
      
    </div>
  );
}
