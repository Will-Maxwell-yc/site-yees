import styled, { keyframes } from "styled-components";

const glowAnimation = keyframes`
  0% {
    clip-path: inset(0 100% 0 0); /* Começa no canto superior esquerdo */
  }
  25% {
    clip-path: inset(0 0 0 100%); /* Desce pela borda direita */
  }
  50% {
    clip-path: inset(0 0 100% 0); /* Percorre a parte inferior */
  }
  75% {
    clip-path: inset(0 100% 0 0); /* Sobe pela borda esquerda */
  }
  100% {
    clip-path: inset(100% 0 0 0); /* Volta ao ponto inicial */
  }
`;

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  max-width: 100%;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(0, 255, 0, 50);
    filter: blur(8px);
    clip-path: inset(0 100% 100% 0);
    animation: ${glowAnimation} 8s linear infinite;
    z-index: 2;
  }
`;

export const Background = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

export const Content = styled.div`
  position: relative;
  z-index: 3;
  color: white;
  text-align: left;
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin-left: 90px;

  h1 {
    font-size: 4rem;
    margin: 0;
  }

  p {
    font-size: 1.5rem;
    margin: 1rem 0;
  }
`;
