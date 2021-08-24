import React, {useState,useEffect} from 'react'
import LoginHeader from '../../../../components/loginHeader/loginHeader';
import { CenterContainer, CenterContainer2, CenterContainerIfMobile, FlexStartVerticalContainerCenterIfMobile, HorizontalContainer, VerticalContainer, VerticalContainerIfMobile } from '../../../../styles/generalStyledComponents'
import { BotaoAcao, ImagemPrincipalInstituicao } from './newPost-styled';

import CreateIcon from '@material-ui/icons/Create';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import PersonIcon from '@material-ui/icons/Person';
import { FormControl, FormControlLabel, Typography } from '@material-ui/core';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

import CompanyProfileHeader from '../../../../components/companyProfileHeader/companyProfileHeader';

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


const NovaPostagem : React.FC = () =>{

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
        <>

        <LoginHeader/>

        <div style={{ minHeight: "2px", backgroundColor: "#284870", margin: "25px 60px"}}></div>

        <CompanyProfileHeader/>

        <div style={{ minHeight: "2px", backgroundColor: "#284870", margin: "25px 60px"}}></div>

            <FlexStartVerticalContainerCenterIfMobile>
                <Typography variant="h4" color="primary" className={classes.title}>Nova Postagem</Typography>
            </FlexStartVerticalContainerCenterIfMobile>

            {/* Checkboxs e inputs */}
            <CenterContainerIfMobile>
                <FormControlLabel
                    control={<Checkbox checked={isPermanentPost}
                                onClick={()=>{setIsPermanentPost(true)}}
                                color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />}
                    label="Postagem Permanente"
                    labelPlacement={isMobile ? "start":"start"}
                    className={classes.marginBetweenChecks}
                />
                    
                <FormControlLabel
                    control={<Checkbox checked={!isPermanentPost}
                                onClick={()=>{setIsPermanentPost(false)}}
                                color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />}
                    label="Postagem Temporária"
                    labelPlacement={isMobile ? "start":"end"}
                    className={classes.marginBetweenChecks}
                />
                
                <form className={classes.container} noValidate>
                    <VerticalContainerIfMobile>
                        <TextField
                            disabled={isPermanentPost}
                            id="dateStart"
                            label="Inicio"
                            type="date"
                            className={classes.dateInput}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        <TextField
                            disabled={isPermanentPost}
                            id="dateEnd"
                            label="Fim"
                            type="date"
                            className={classes.dateInput}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                    </VerticalContainerIfMobile>
                
                </form>

            </CenterContainerIfMobile>


            <CenterContainerIfMobile>
                <TextField
                    id="outlined-multiline-static"
                    label="Descrição"
                    multiline
                    rows={10}
                    className={classes.textField}
                    defaultValue={description}
                    variant="outlined"
                />
            </CenterContainerIfMobile>
        

        </>
    )
}
export default NovaPostagem;