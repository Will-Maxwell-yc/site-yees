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
    background: var(--base);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    text-decoration: none;

    ::before {
    width: 208px;
    height: 208px;
    border-radius: 50%;
    border: 1px solid var(--base);
    content: "";
    position: absolute;
    top: 10px;
    left: -7px;
    transition: all 0.4s;
    }
    
    ::after {
    border-radius: 50%;
    content: "";
    position: absolute;
    bottom: 38px;
    left: 0;
    transition: all 0.4s;
    width: 10px;
    background: var(--base);
    height: 10px;
    opacity: 0;
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
`

export const TextMore = styled.span`
  font-size: 18px;
`

export const CommonSub = styled.div`
  font-size: 24px;
  font-family: "Caveat", cursive;
  color: rgb(201, 243, 29);
  position: relative;
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: center;
  width: 333px;
  margin: 0 auto 30px;

  &::after,
  &::before {
    position: absolute;
    content: "";
    height: 1px;
    background: var(--base);
  }

  &::before {
    left: 0;
    width: 80px;
  }

  &::after {
    right: 0;
    width: 80px;
  }

  @media (max-width: 576px) {
    width: 280px;
    gap: 14px;

    &::before,
    &::after {
      width: 50px;
    }
  }
`;