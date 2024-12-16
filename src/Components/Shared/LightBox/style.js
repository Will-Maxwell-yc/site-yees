import styled from "styled-components";

export const LightboxWrapper = styled.div`
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

export const LigthboxContent = styled.div`
    max-width: 80%;
    text-align: center;
    position: relative;
    // padding: 20px;
    //box-shadow: 0 0 3px 4px rgba(0, 0, 0, 0.1);
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

export const ImageContainer = styled.div`
  margin: 20px 0;
`

export const ImageCount = styled.div`
  font-size: 14px;
  color: var(--pra);
  position: absolute;
  right: 15px;
  bottom: -7px;
`

export const LightboxBtns = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
`

export const Button = styled.button`
  background: transparent;
  color: var(--white);
  border: none;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;

  @media (max-width: 600px ){
    padding: 0px;
  }
`

export const Icon = styled.i`
    font-size: 22px;
`
export const Img = styled.img`
    width: 100%;
`



    