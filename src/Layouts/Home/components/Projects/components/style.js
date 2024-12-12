import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProjectSection = styled.div`
    padding-top: 120px;
    padding-bottom: 120px;

    @media (max-width: 991px) {
        padding-bottom: 80px;
    }

    @media (max-width: 1199px) {
        padding-bottom: 100px;
    }
 
`

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;

    @media (min-width: 576px) {
        max-width: 540px; 
    }

    @media (min-width: 768px) {
        max-width: 720px;
    }

    @media (min-width: 992px) {
        max-width: 960px; 
    }
    
    @media (min-width: 1200px) {
        max-width: 1350px;
        margin: 0 auto;
    }
`

export const ProjectWrapone = styled.div`
    columns: 2;
    gap: 58px;

  @media (max-width: 1200px) {
    gap: 40px;
  }

  @media (max-width: 992px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    columns: 1;
  }
`

export const CustomHover = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  
  @media (max-width: 1440px) {
    margin-top: 60px;
  }

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`

export const HoverCircle = styled(Link)`
  width: 208px;
  height: 208px;
  background: #23C55E;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  

  &::before {
    width: 208px;
    height: 208px;
    border-radius: 50%;
    border: 1px solid #23C55E;
    content: "";
    position: absolute;
    top: 10px;
    left: -7px;
    transition: all 0.4s;
  }
  &::after {
    border-radius: 50%;
    content: "";
    position: absolute;
    bottom: 38px;
    left: 0;
    transition: all 0.4s;
    width: 10px;
    background: #23C55E;
    height: 10px;
    opacity: 0;
  }
  &:hover {
    .textmore {
      color: var(--title);
    }
    i {
      color: var(--title);
    }
    &::before {
      top: -10px;
    }
    &::after {
      width: 100%;
      height: 100%;
      opacity: 1;
      bottom: 0;
    }
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;

    &::before {
      width: 120px;
      height: 120px;
    }
  }
  
`

export const Box = styled.span` 
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    z-index: 1;
`

export const Icon = styled.i`
    margin-bottom: 1px;
    font-size: 28px;
    display: block;
    color: var(--title);
    transition: all 0.4s;

    @media (max-width: 768px) {
      margin-bottom: 0px;
      font-size: 26px;
    }
`

export const TextMore = styled.span`
  font-size: 18px;

   @media (max-width: 768px) {
    font-size: 12px;
  }
`

