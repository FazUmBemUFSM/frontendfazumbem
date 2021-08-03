import styled from 'styled-components'

export const CenterContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    
`;

export const CenterContainerIfMobile = styled.div`

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    
    @media screen and (max-width: 670px){
        justify-content: center;
        align-Items: center;
        
    }

`;

export const SpaceBetweenCenterContainerIfMobile = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    
    @media screen and (max-width: 670px){
        justify-content: center;
        align-Items: center;
        
    }

`;

export const CenterContainer2 = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    

`;

export const FlexEndContainerCenterIfMobile = styled.div`

    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    
    @media screen and (max-width: 670px){
        justify-content: center;
        align-Items: center;
        
    }

`;

export const FlexEndContainerCenterIfMobileVertical = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    flex-wrap: wrap;
    
    @media screen and (max-width: 670px){
        justify-content: center;
        align-Items: center;
        
    }

`;

export const VerticalContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const HorizontalContainer = styled.div`

    display: flex;
    flex-direction: line;
    justify-content: center;
    align-items: center;

`;

export const VerticalContainerIfMobile = styled.div`

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    
    @media screen and (max-width: 670px){
        flex-direction: column;
        
    }

`;

export const PageContentMarginHOC = styled.div`

    margin: 1em 2.0em;

    @media screen and (max-width: 1920px) and (max-height: 1080px){
        margin: 1em 2.5em;
        
    }

    @media screen and (max-width: 1080px) and (max-height: 720px){ //hd
        margin: 1em;
        
    }

    @media screen and (max-width: 670px){
        margin: 1em 0.3em;
        
    }

`

export const CenterTextIfMobile = styled.div`

    text-align: left;
    
    @media screen and (max-width: 670px){
        text-align: center;
    }

`;

export const FlexStartVerticalContainerCenterIfMobile = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    
    @media screen and (max-width: 670px){
        justify-content: center;
        align-Items: center;
        text-align: center;
    }

`;
