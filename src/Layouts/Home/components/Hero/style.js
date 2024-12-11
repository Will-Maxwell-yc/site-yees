import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  max-width: 100%;
  overflow: hidden;
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

const slideInFromLeftWithOpacity = `
  @keyframes slideInFromLeftWithOpacity {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

const fadeIn = `
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
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

  @media (max-width: 1040px) {
    margin-left: 50px;
    width: 80%;
  }

  ${slideInFromLeftWithOpacity}
  ${fadeIn}

  h1 {
    font-size: 4rem;
    margin: 0;
    animation: slideInFromLeftWithOpacity 2s ease-out;

    @media (max-width: 615px) {
      font-size: 2.5rem;
    }
  }

  p {
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 1.5rem;
    margin: 1rem 0;
    animation: fadeIn 2s ease-in;

    @media (max-width: 615px) {
      font-size: 1rem;
    }
  }

  span {
    font-size: 2.5rem;
    font-weight: 600;
    background-color: #23c55e;
    background-image: linear-gradient(90deg, #10b982, #13b8a7);
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
`;

export const WelcomeText = styled.p`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  text-align: center;
  color: #454545;
  font-size: 1rem;
  z-index: 3;
  animation: fadeIn 2s ease-in;

  @media (max-width: 1040px) {
    display: none;
  }

  &:hover {
    background: linear-gradient(180deg, #23C55E, #10B982, #13B8A7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    cursor: pointer; 
  }

  span {
    display: block;
    margin-bottom: 10px;
    writing-mode: vertical-rl;
    letter-spacing: 2.5px;
  }

  .arrow {
    font-size: 1rem;
    animation: bounce 1.5s infinite;
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;


