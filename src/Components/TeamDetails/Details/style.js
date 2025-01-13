import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    background: url("/src/assets/img/about/about-bg.png") no-repeat center center;
    background-size: cover;
`
const rotate = keyframes`
  0% {
    stroke-dasharray: 15 120 25 25;
    transform: rotate(0deg);
  }
  50% {
    stroke-dasharray: 16 25 92 72;
    transform: rotate(180deg);
  }
  100% {
    stroke-dasharray: 4 250 22 22;
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
    padding-top: 120px;
    padding-bottom: 120px;
    max-width: 1400px;
    margin:0 auto;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    @media (min-width: 930px) {
        flex-direction: unset;
        align-items: normal;
        justify-content: center;
    }

    @media (min-width: 1000px) {
        justify-content: space-around;
    }

`

export const SvgContainer = styled.div`
    position: relative;
    max-width: 320px;
    height: 320px;
    display: flex;
    justify-content: center;
    align-items: center;

  svg {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: center;
    animation: ${rotate} 20s linear infinite;
  }

  @media (min-width: 1200px ) {
    max-width: 450px;
    height: 450px;
  }
`

export const Card = styled.div`
    position: relative;
    max-width: 450px;
    padding: 20px;
`

export const CardImage = styled.img`
    width: 310px;
    height: 310px;
    object-fit: cover;
    border-radius: 50%;
    position: absolute;
    mix-blend-mode: lighten;

    @media (min-width: 1200px ) {
        width: 400px;
        height: 400px
    }
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

export const Link = styled.a`
    margin-top: 10px;
    text-decoration: none;
    display: flex;
    gap: 20px;
    font-size: 30px;
    align-self: center;

    &:hover {
      text-decoration: underline;
    }
`

export const Button = styled.button`
      padding: 10px 20px;
      color: #e8e8e8;
      border: none;
      background-color: #292929;
      text-decoration: none;
      border-radius: 20px;
      font-size: 20px;
      font-weight: bold;
      transition: background-color 0.3s ease;

      .downloadicon  {
        color: #23c55e;
      }

      &:hover .downloadicon  {
        color: black
      }

      &:hover {
        background-color: #23c55e; 
        color: black !important;
      }
`

