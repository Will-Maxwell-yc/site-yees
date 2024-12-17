import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LightboxContentVideo = styled.div`
    max-width: 80%;
    text-align: center;
    position: relative;
`
export const Iframe = styled.iframe`
    width: 300px;
    height: 200px;

    @media (min-width: 576px) {
      width: 400px;
      height: 300px;
    }

    @media (min-width: 768px) {
      width: 600px;
      height: 400px;
    }

     @media (min-width: 992px){ 
      width: 800px;
      height: 500px;
    }
`

export const CloseButton = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 17px;
  font-weight: 700;
  color: var(--white);
`