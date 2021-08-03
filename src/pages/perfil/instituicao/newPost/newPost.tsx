import React from 'react'
import LoginHeader from '../../../../components/loginHeader/loginHeader';
import { CenterContainer, CenterContainer2, CenterContainerIfMobile, FlexStartVerticalContainerCenterIfMobile, HorizontalContainer, VerticalContainer, VerticalContainerIfMobile } from '../../../../styles/generalStyledComponents'
import { BotaoAcao, ImagemPrincipalInstituicao } from './newPost-styled';

import CreateIcon from '@material-ui/icons/Create';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import PersonIcon from '@material-ui/icons/Person';
import { Typography } from '@material-ui/core';

const NovaPostagem : React.FC = () =>{

    return(
        <>

            <LoginHeader/>

            <div style={{ minHeight: "2px", backgroundColor: "#284870", margin: "25px 60px"}}></div>

            <div style={{minWidth: "100%"}}>
            <CenterContainer2>
                <VerticalContainerIfMobile >
                    
                    <BotaoAcao>
                        <CenterContainer2>
                            <PersonIcon />
                            <Typography>Perfil</Typography>
                        </CenterContainer2>
                    </BotaoAcao>

                    <BotaoAcao>
                        <CenterContainer2>
                            <CreateIcon />
                            Criar Nova Publicação
                        </CenterContainer2>
                    </BotaoAcao>

                    <BotaoAcao>
                        <CenterContainer2>
                            <FormatListBulletedIcon/>
                            Ver Publicações Atuais
                        </CenterContainer2>
                    </BotaoAcao>
                    
                </VerticalContainerIfMobile>
            </CenterContainer2>
            </div>

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
            

        </>
    )
}
export default NovaPostagem;