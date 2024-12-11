import styled from "styled-components";

export const Wrapper = styled.div`
    padding-top: 120px;
    padding-bottom: 120px;
`

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem; 
    justify-content: center;
`

export const Content = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 66%;
    justify-content: center;
`

export const BreadcrumndWrap = styled.div`
    text-align: center; 
`

export const Heading = styled.h1`
  font-size: 36px; 
  color: white;
  margin-bottom: 34px;

  @media (max-width: 992px) { 
    font-size: 36px;
    color: white;
    margin-bottom: 34px;
  }

  @media (max-width: 576px) { 
    font-size: 30px;
    color: white;
    margin-bottom: 22px;
  }
`


export const BreadcrumndCont = styled.ul`
    justify-content: center;
    display: flex;
    align-items: center;
    gap: 10px;
    
    @media (max-width: 500px){
        flex-wrap: wrap;
        gap: 5px 14px;
    }
`

export const ListItem = styled.li`
  font-size: 20px;
  font-family: "Caveat", cursive;
  color: #23C55E;

  a {
    color: white;
    font-family: "Caveat", cursive;
  }

  @media (min-width: 650px){
    font-size: 24px;
  }
`