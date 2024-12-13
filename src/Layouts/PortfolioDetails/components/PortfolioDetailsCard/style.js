import styled from "styled-components";

export const Wrapper = styled.div`
    padding-bottom: 120px;
    padding-top: 120px;
    background: url(/src/assets/img/about/about-bg.png) no-repeat center center;
    background-size: cover;
    
    @media (max-width: 1199px) {
        padding-bottom: 100px;
        padding-top: 100px;
    }

    @media (max-width: 991px) {
        padding-bottom: 80px;
        padding-top: 80px;
    }
`

export const Container = styled.div`
    padding: 40px;
    margin: 0 auto;
    
    @media (min-width: 576px) {
        max-width: 540px;
        padding: 20px;
    }

    @media (min-width: 768px) {
        max-width: 720px;
    }

    @media (min-width: 962px) {
        max-width: 960px;
    }

    @media (min-width: 1200px) {
        width: 100%;
        max-width: 1350px;
    }

`

export const ProjectHead = styled.div`
    text-align: center;
`

export const SubTitle = styled.h2`
    font-size: 40px;
    line-height: 120%;
    font-weight: 500;
    font-family: "Archia";
    margin-bottom: 40px;
`

export const ContainerProjectList = styled.div`
    
`

export const CommonIcon = styled.div`
  border-radius: 6px;
  background-color: rgb(29, 29, 29);
  min-width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s;
  display: none;

`