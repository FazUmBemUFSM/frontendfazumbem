import styled from 'styled-components'

export const CardField = styled.div`

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
`;

export const CenterButton = styled.div`

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
    
`;

export const PostagemContainer = styled.div`

    background-color: rgba(158, 192, 218,0.5);
    
    margin: 5px 10px;

    width: 900px;
    height: 200px;

    border-radius: 20px;
    
    @media screen and (max-width: 1000px){
        width: 600px;
        height: 300px;
        margin: 5px 10px;
    }

    @media screen and (max-width: 670px){
        width: 80%;
        height: 480px;
        margin: 5px 10px;
    }
 
`;

export const PhotoArea = styled.img`

    width: 160px;
    height: 160px;
    border-radius: 90px;
    margin: 10px;

    @media screen and (max-width: 1000px){
        margin: 0px 10px 0px 50px;
        border-radius: 90px;
    }

    @media screen and (max-width: 670px){
        width: 160px;
        height: 160px;
        margin: 10px 0px;
    }
`;

export const InfosArea = styled.div`

    width: 500px;
    height: 160px;

    @media screen and (max-width: 1000px){
        margin: 0px 0px;
        width: 340px;
    }

    @media screen and (max-width: 670px){
        width: 240px;
        height: 200px;
        margin: 0px 0px;
    }
`;

export const ButtonsArea = styled.div`


    margin-left: 10px;
    width: 160px;
    height: 160px;

    @media screen and (max-width: 1000px){
        margin: 10px 60px 0px 60px;
        width: 500px;
        height: 80px;
    }

    @media screen and (max-width: 670px){
        width: 240px;
        height: 70px;
        margin: 10px 0px;
    }
`;


export const ActionButton = styled.div`

    width: 130px;
    height: 50px;
    margin:10px;

    border-radius: 10px;
    border-style: solid;
    border-color: #284870;
    border-width: 2px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.2rem;
    font-family: Roboto;
    color: #284870;
    font-weight: 400;

    cursor: pointer;

    @media screen and (max-width: 1000px){
        width: 41%;
        height: 60px;
        margin:10px;
    }

    @media screen and (max-width: 670px){
        width: 39%;
        height: 50px;
        margin:10px;
    }
    &:hover{
        background-color: rgba(158, 192, 218,0.5);
    }
`;
export const HorizontalContainerIfMobile2 = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 100%;
    
    @media screen and (max-width: 1000px){
        flex-direction: row;
    }
    @media screen and (max-width: 670px){
        flex-direction: row; 
    }

`;

export const NetworkButton = styled.div`
    cursor: pointer;
`;