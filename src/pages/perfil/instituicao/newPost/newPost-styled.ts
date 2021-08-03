import styled from 'styled-components'

export const BotaoAcao = styled.div`

    background-color: #284870;
    color: white;
    font-family: 'Roboto';

    margin: 4px 20px;
    padding: 15px;
    border-radius: 5px;
    width: 200px;


    display: flex;
    

    :hover {
        cursor: pointer;    
    }
    :active{
        background-color: #183860;
    }

`;


export const ImagemPrincipalInstituicao = styled.img`

    

    margin: 60px 60px;
    border-radius: 50%;
    width: 15%;
    
    @media screen and (max-width: 670px){
        width: 80%;
        margin: 0px 0px;
    }
 
`;
