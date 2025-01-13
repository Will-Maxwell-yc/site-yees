import styled from "styled-components";

export const Wrapper = styled.div`
    padding-top: 120px;
    padding-bottom: 120px;
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 40px;
`

export const ContainerCard = styled.div`
    display: flex;
    width: 100%;
    gap: 40px;
    align-items: center;
    justify-content: center;

    @media (max-width: 750px) {
        flex-direction: column;
        gap: 60px;
    }
`

export const TitleProject = styled.h3`
    font-size: 32px;
    line-height: 120%;
    font-weight: 600;
    color: #23c55e;
    opacity: 0;
    text-align: center;
    z-index: 1;

    @media (max-width: 760px) {
        opacity: 1;
    }
`
export const Texto = styled.p`
    font-size: 20px;
    color:white;
    font-weight: 600;
    opacity: 0;
    align-items: center;
    padding: 20px;
    z-index: 1;

    @media (max-width: 760px) {
        opacity: 1;
    }
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75); 
    border-radius: 3%;
    opacity: 0; 
    transition: opacity 0.5s ease-in-out; 

    @media (max-width: 760px) {
        opacity: 1;
    }
`

export const Card = styled.div`
    max-width: 450px;
    width: 100%;
    height: 500px;
    position: relative;
    cursor: pointer;

    &:hover ${Overlay} {
    opacity: 1; 
    }
    &:hover ${Texto} {
    opacity: 1; 
    }
    &:hover ${TitleProject} {
    opacity: 1; 
    }
`

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 50px;
    
    @media (max-width: 760px) {
        justify-content: center;
    }
`

export const Img = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 3%;
    background-image: url(${(props) => props.src});
    background-size: cover; 
    background-position: 100% 0%; 
    background-repeat: no-repeat; 
    transition: background-position 5s ease-in-out; 
    
    &:hover {
        background-position: 100% 100%; 
    }

`




