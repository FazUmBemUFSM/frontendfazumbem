import React,{useState} from 'react'
import LoginHeader from '../../../components/loginHeader/loginHeader';
import { CenterContainerIfMobile, FlexStartVerticalContainerCenterIfMobile, VerticalContainer } from '../../../styles/generalStyledComponents'
import { AreaTextoDescricao, ImagemPrincipalInstituicao } from './instituicaoPerfil-styled';


import { Typography } from '@material-ui/core';
import CompanyProfileHeader from '../../../components/companyProfileHeader/companyProfileHeader';

const InstituicaoPerfil : React.FC = () =>{

    const [description,setDescription] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ");


    return(
        <>

            <LoginHeader/>

            <div style={{ minHeight: "2px", backgroundColor: "#284870", margin: "25px 60px"}}></div>

            <CompanyProfileHeader/>

            <div style={{ minHeight: "2px", backgroundColor: "#284870", margin: "25px 60px"}}></div>

            
            <CenterContainerIfMobile>
                
                <ImagemPrincipalInstituicao src="https://www.designevo.com/images/home/2-5-0/cute-monkey-and-interesting-gaming.webp"/>
                
                <VerticalContainer>
                    <FlexStartVerticalContainerCenterIfMobile>
                        <Typography variant="h2" color="primary">Lar das Vovozinhas</Typography>
                        <Typography variant="h5" color="primary">Rua Erly de Almeida Lima</Typography>
                        <Typography variant="h5" color="primary">CNPJ: 200.4585.114-99</Typography>
                    </FlexStartVerticalContainerCenterIfMobile>
                </VerticalContainer>
                
            </CenterContainerIfMobile>
            
            <AreaTextoDescricao>
                <Typography variant="h4" color="primary">Descrição</Typography>
                <Typography variant="h5" color="primary">{description}</Typography>
            </AreaTextoDescricao>

        </>
    )
}
export default InstituicaoPerfil;