import styled from "styled-components";

// export const CusMb60 = styled.div`
//   margin-bottom: 60px;

//   @media (max-width: 1400px) {
//     margin-bottom: 50px;
//   }

//   @media (max-width: 1200px) {
//     margin-bottom: 40px;
//   }

//   @media (max-width: 992px) {
//     margin-bottom: 30px;
//   }
// `

export const Wrapper = styled.div`
    transition: all 0.4s;
    ${(props) => props.index !== 2 && `
    margin-bottom: 60px;

    @media (max-width: 1400px) {
        margin-bottom: 50px;
    }

    @media (max-width: 1200px) {
        margin-bottom: 40px;
    }

    @media (max-width: 992px) {
        margin-bottom: 30px;
    }
    
  `}
`

export const Thumb = styled.div`
    margin-bottom: 30px;
    display: block;
    width: 100%;
    cursor: pointer; 
`

export const Img = styled.img`
    width: 100%;
    transition: all 0.4s;
    border-radius: 10px;

    &:hover {
    transform: scale(1.025);
    border: none; 
    border-radius: 0; 
    }
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
`

export const Span = styled.span`
    font-size: 18px;
    display: block;
    margin-bottom: 0.5rem; 
    margin-bottom: 1rem; 
    display: block; 
    text-transform: uppercase; 

    background: linear-gradient(
    to right,
    #23c55e,
    #10b982,
    #13b8a7
    );

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (min-width: 1200px) {
        margin-bottom: 1rem; 
    }
`

export const H3 = styled.h3`
    font-size: 32px;
    line-height: 120%;
    font-weight: 600;
    font-family: "Archia";
    margin-top: 0;
    margin-bottom: .5rem;
`

export const LeftCont = styled.a`
  text-decoration: none;
`

export const Icon = styled.i`
    color: var(--white);
    font-size: 20px;
    transition: all 0.4s;
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

  &:hover {
    background: #23C55E;
     ${Icon}{
        color: var(--title);
     }
  }
`

