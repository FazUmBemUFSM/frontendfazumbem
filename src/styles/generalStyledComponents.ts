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

    margin: 1em;

`

export const CenterTextIfMobile = styled.div`

    text-align: left;
    
    @media screen and (max-width: 670px){
        text-align: center;
    }

`;
