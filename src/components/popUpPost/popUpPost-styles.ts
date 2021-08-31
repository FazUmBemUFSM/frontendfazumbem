import styled from 'styled-components'


export const ImagePost = styled.img`

    width: 60%;
    height: 60%;
    border-radius: 10px;
    margin: 10px;

    @media screen and (max-width: 1000px){
        width: 70%;
        height: 70%;
    }

    @media screen and (max-width: 670px){
        width: 80%;
        height: 80%;
    }
`;

export const ImageCompany = styled.img`

    width: 60px;
    height: 60px;
    border-radius: 100px;
    border-style: solid;
    border-color: black;
    margin: 10px;

    @media screen and (max-width: 1000px){
        width: 60px;
        height: 60px;
    }

    @media screen and (max-width: 670px){
        border-width: 2px;
        width: 40px;
        height: 40px;
    }
`;