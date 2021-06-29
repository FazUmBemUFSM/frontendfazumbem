import React from 'react'
import { Paper } from '@material-ui/core';
import { CenterContainer, TabLogin } from './login-styles';

const Login : React.FC = () => {

    return(
        <CenterContainer>
            <Paper style={{width: "80vw", margin:30, height: "80vh", backgroundColor: "#FEFEFE"}}>
                <div style={{display:"flex"}}><TabLogin/><TabLogin/></div>
                
                
            </Paper>
        </CenterContainer>
    )


}
export default Login;