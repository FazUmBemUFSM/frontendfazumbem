import React from 'react'
import { Paper } from '@material-ui/core';
import { CenterContainer, TabLogin } from './login-styles';
import { TextField, Button } from '@material-ui/core';

const Login : React.FC = () => {

    return(
        <CenterContainer>
            <Paper style={{width: "80vw", margin:30, height: "80vh", backgroundColor: "#FEFEFE"}}>
                <div style={{display:"flex"}}><TabLogin/><TabLogin/></div>
                <p>Digite seu login e senha</p>
                <TextField id="outlined-basic" label="Email" variant="outlined"/>
                <TextField id="outlined-basic" label="Senha" variant="outlined"/>
                <Button variant="contained" color="primary">Entrar</Button>
            </Paper>
        </CenterContainer>
    )


}
export default Login;