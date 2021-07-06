import React , {useState} from 'react'
import { VerticalContainer , HorizontalContainer} from './login-styles';

import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Tab, Tabs, Typography, Box} from '@material-ui/core';

const useStyles = makeStyles({
    item: {
        margin: 7
    },
    textField:{
        width: 400
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
                    <h4>Digite seu login e senha</h4>
                    <TextField className={classes.item + " " +classes.textField} id="outlined-basic" label="Email" variant="outlined"/>
                    <TextField className={classes.item + " " +classes.textField} id="outlined-basic" label="Senha" variant="outlined"/>
                    <Button className={classes.item} variant="contained" color="primary">Entrar</Button>
                </VerticalContainer>
                <div className={classes.barra}/>
                <VerticalContainer style={{height: "100%", width: "50%"}}>
                    <h4>Ainda não é registrado?</h4>
                    <Button variant="contained" color="secondary">Aqui</Button>
                    <h4>Clique Aqui e Registre-se!</h4>
                </VerticalContainer>
            </HorizontalContainer>
            
            

        </>
    )


}
export default LoginInst;