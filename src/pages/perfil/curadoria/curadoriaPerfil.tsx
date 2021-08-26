import React,{useState} from 'react'
import LoginHeader from '../../../components/loginHeader/loginHeader';
import { CenterContainerIfMobile, FlexStartVerticalContainerCenterIfMobile, VerticalContainer } from '../../../styles/generalStyledComponents'
import { AreaTextoDescricao, ImagemPrincipalInstituicao } from './curadoriaPerfil-styled';


import { Typography } from '@material-ui/core';
import CompanyProfileHeader from '../../../components/companyProfileHeader/companyProfileHeader';
import CuradoriaHeader from '../../../components/curadoriaHeader/curadoriaHeader';

const CuradoriaPerfil : React.FC = () =>{

    const [description,setDescription] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ");


    return(
        <>

            <LoginHeader/>

            <div style={{ minHeight: "2px", backgroundColor: "#284870", margin: "25px 60px"}}></div>

            <CuradoriaHeader/>

            <div style={{ minHeight: "2px", backgroundColor: "#284870", margin: "25px 60px"}}></div>

            
            

        </>
    )
}
export default CuradoriaPerfil;