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




    
