import React , {useState} from 'react'
import { VerticalContainer , HorizontalContainer} from './login-styles';

import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Tab, Tabs, Typography, Box} from '@material-ui/core';

const useStyles = makeStyles({
    item: {
        margin: 7
    },
    textField:{
        width: 400,
        size: "medium"
    },
    fisrtArea: {
        width: 50
    },
    barra:{
        backgroundColor: "#111",
        width: 3,
        height: 500,
        marginLeft: 50
    }
});

const LoginInst : React.FC = () => {

    const classes = useStyles();

    return(
        <>
            <HorizontalContainer style={{height: "100%"}}>
                <VerticalContainer style={{height: "100%", width: "50%", alignItems: "flex-start", marginLeft: 100}}>
                    <Typography variant={"h4"} style={{marginBottom:10}}>Digite seu login e senha</Typography>

                    <TextField className={classes.item + " " +classes.textField} id="outlined-basic" label="Email" variant="outlined" style={{marginBottom:10}}/>
                    <TextField className={classes.item + " " +classes.textField} id="outlined-basic" label="Senha" variant="outlined" style={{marginBottom:10}}/>

                    <Button className={classes.item} variant="contained" color="primary" style={{margin:5, fontSize: 25}}>
                        Entrar
                    </Button>

                </VerticalContainer>
                <div className={classes.barra}/>
                <VerticalContainer style={{height: "100%", width: "50%"}}>
                    <Typography variant={"h4"}>Ainda não é registrado?</Typography>
                    <Button size="large" variant="contained" color="secondary" style={{margin:50, fontSize: 25}}>
                        Cadastre-se
                    </Button>
                    <Typography variant={"h4"}>Clique Aqui e Registre-se!</Typography>
                </VerticalContainer>
            </HorizontalContainer>
            
            

        </>
    )


}
export default LoginInst;