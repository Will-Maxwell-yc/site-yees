import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
    
`
export const PortfolioContainer = styled.div`
    padding-bottom: 120px;

    @media (max-width: 1199px) {
        padding-bottom: 100px;
    }

    @media (max-width: 991px) {
        padding-bottom: 80px; 
    }
`

export const Container = styled.div`
    margin: 0 auto;
    padding: 40px;

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
    }

`
export const Bigthumbner = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 60px;

    @media (max-width: 991px) {
        margin-bottom: 50px;
    }
`

export const Img = styled.img`
    width: 100%;
`

export const DetailContact = styled.div`
    background-color: rgb(18, 18, 18);
    border-radius: 0 30px 0 0;
    padding: 45px 45px;
    position: absolute;
    bottom: 0;
    left: 0;

    @media (max-width: 1199px) {
        padding: 24px 24px;
    }

    @media (max-width: 991px) {
        width: 100%;
        padding: 20px 12px;
        position: initial;
    }
`

export const Title = styled.h3`
    color: var(--white);
    margin-bottom: 32px;
    font-size: 32px;
    line-height: 120%;
    font-weight: 600;
    font-family: "Archia";

    @media (max-width: 575px) {
        font-size: 26px;
    }
`

export const ProtItembox = styled.div`
    display: flex;
    gap: 100px;
    margin-bottom: 36px;

    @media (max-width: 1199px) {
        margin-bottom: 22px;
    }

    @media (max-width: 991px) {
        gap: 20px;
    }
`

export const Items = styled.div`
     @media (max-width: 1199px) {
        margin-bottom: 14px;
    }
`

export const ItemsMb = styled.div`
    margin-bottom: 30px;

    @media (max-width: 1199px) {
        margin-bottom: 14px;
    }
    
`

export const ProtLeft = styled.div`
    margin-bottom: 30px;
`

export const SubTitle = styled.h5`
    font-weight: 500;
    color: var(--white);
    margin-bottom: 10px;
`

export const Social = styled.ul`
    display: flex;
    gap: 1rem;
    padding: 0;
    margin: 0;
    list-style: none;
`

export const Paragrafo = styled.p`
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 0;
    color: var(--pra);

    @media (max-width: 991px) {
        font-size: 14px; 
    }
`

export const Li = styled.li``

export const LinkIcon = styled.a`
    width: 46px;
    height: 46px;
    background: var(--white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
    background: linear-gradient(
      to right,
      #23c55e,
      #10b982,
      #13b8a7
    );
    -webkit-background-clip: border-box;
    -webkit-text-fill-color: unset;
  }
`

export const I = styled.i`
    
`


