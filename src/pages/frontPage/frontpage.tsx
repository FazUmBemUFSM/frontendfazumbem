import React from "react"

import marca from '../../assets/marca.png'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import { TextField, Button, Tab, Tabs, Box} from '@material-ui/core';

import { PageContentMarginHOC, CenterContainerIfMobile, CenterTextIfMobile, VerticalContainerIfMobile,CenterContainer,CenterContainer2, FlexEndContainerCenterIfMobile, SpaceBetweenCenterContainerIfMobile, VerticalContainer, FlexEndContainerCenterIfMobileVertical, HorizontalContainer} from "../../styles/generalStyledComponents";
import {Logo} from './frontpage-styled'
import CardCustom from "../../components/card/cardCustom";
import LoginHeader from "../../components/loginHeader/loginHeader";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";


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




const FrontPage : React.FC = () => {
    const classes = useStyles();

    return(
        <>

            <LoginHeader/>

            <div style={{ minHeight: "2px", backgroundColor: "#284870", margin: "25px 60px"}}></div>

            <div style={{ minHeight: "500px", backgroundColor: "green", margin: "25px 75px"}}>
              mapa
            </div>

            <CenterContainer>
              <CenterTextIfMobile>
                <Typography variant="subtitle2" color="secondary">CAMPANHAS DE ARRECADAÇÃO</Typography>
              </CenterTextIfMobile>
            </CenterContainer>

            <div style={{width:"200px", height:"2000px"}}>

            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
            </div>




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
            


        </>)
}

export default FrontPage;