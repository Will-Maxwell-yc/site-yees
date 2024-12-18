import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    background: url("/src/assets/img/about/about-bg.png") no-repeat center center;
    background-size: cover;
`


export const Container = styled.div`
    padding-top: 120px;
    padding-bottom: 120px;
    max-width: 1400px;
    margin:0 auto;
    display: flex;
    justify-content: space-around;

   @media (max-width: 890px){
        flex-direction: column;
        justify-content: center;
   } 
`
export const Card = styled.div`
    max-width: 450px;
    height: 500px;
    padding: 20px;
`

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5%;
`


export const Content = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    gap: 20px;
    padding: 20px;
`

export const Header = styled.div`
    font-size: 30px;
    background: linear-gradient(
    to right,
    #23c55e,
    #10b982,
    #13b8a7
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const Nome = styled.div`
    font-size: 40px; 
    font-weight: bold; 
    margin-bottom: 20px; 
    line-height: 1.5;
    color: #23c55e;
`
export const Lore = styled.div`
    font-size: 20px;
`

