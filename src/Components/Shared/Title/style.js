import styled from "styled-components"

export const Wrapper = styled.div`
    text-align: center;
    max-width: 920px;
    margin: 0 auto 60px;

    @media (max-width: 768px) { 
    margin: 0 auto 50px;
    }

    @media (max-width: 480px) { 
    margin: 0 auto 45px;
    }
`

export const Common = styled.span`
    font-size: 24px;
    font-family: "Caveat", cursive;
    position: relative;
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: center;
    width: 333px;
    margin: 0 auto 30px;
    background: linear-gradient(
    to right,
    #23c55e,
    #10b982,
    #13b8a7
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;


    &::after,
    &::before {
        position: absolute;
        content: "";
    }

    &::before {
        left: 0;
        width: 80px;
        height: 1px;
        background: #23C55E;
        margin-left: -15px;
    }

    &::after {
        right: 0;
        width: 80px;
        height: 1px;
        background: #23C55E;
        margin-right: -15px;
    }

    @media (max-width: 480px) { 
        width: 280px;
        gap: 14px;

        &::before {
        left: 0;
        width: 50px;
        height: 1px;
        }

        &::after {
        right: 0;
        width: 50px;
        height: 1px;
        }
    }
`

export const SubTitle = styled.h2`
    font-weight: 500;
    font-size: 60px;

    @media (max-width: 992px){
      font-size: 48px;
    }

    @media (max-width: 768px) { 
    margin: 0 auto 50px;
    font-size: 36px;
    }

    @media (max-width: 480px) { 
    h2 {
      font-size: 29px;
    }

    margin: 0 auto 45px;
  }
`




    
