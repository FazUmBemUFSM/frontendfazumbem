import React from 'react'
import { useHistory } from 'react-router';
/* Styles */
import { CardField , CenterButton} from './home-styles';

/* Material UI */
import { Button } from '@material-ui/core';
/* Components */
import CardCustom from '../../components/card/cardCustom';

const Home : React.FC = () => {
    const history = useHistory();


    return(
        <>
            <CardField>
                <CardCustom/>
                <CardCustom/>
                <CardCustom/>
                <CardCustom/>
                <CardCustom/>
                <CardCustom/>
                <CardCustom/>
                <CardCustom/>
                <CardCustom/>
                <CardCustom/>
                <CardCustom/>
                <CardCustom/>
            </CardField>
            <CenterButton>
                <Button variant="contained" color="primary"  onClick={()=>{history.push("/login");}}>
                    Cadastre sua Instituição!
                </Button>
            </CenterButton>
        </>
    )


}
export default Home;