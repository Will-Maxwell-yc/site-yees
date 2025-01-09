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
    justify-content: center;
`

export const TitleProject = styled.h3`
    font-size: 32px;
    line-height: 120%;
    font-weight: 600;
    color: #23c55e;
    opacity: 0;
    text-align: center;
`
export const Texto = styled.p`
    font-size: 20px;
    color: #999999;
    opacity: 0;
    align-items: center;
    padding: 20px;
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
`

export const Card = styled.div`
    max-width: 450px;
    width: 100%;
    height: 500px;
    position: relative;

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
    justify-content: center;
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
`;




