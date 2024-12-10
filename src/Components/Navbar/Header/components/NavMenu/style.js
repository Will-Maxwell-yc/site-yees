import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
`

export const ContactButton = styled.div`
    & a {
        background-color: #0CE271;
        padding: 5px 10px;
        display: flex;
        align-items: center;
        border-radius: 5px;
        gap: 5px;
    }

    & a:hover {
        background-color: #09b359;
    }
`

export const Text = styled.span``
export const Icon = styled.span``

export const MenuButton = styled.div`
    height: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
`

export const AnimatedSticks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 10px;
`

const animation = keyframes`
    from {width: 20px}
    to {width: 50px}
`

export const Stick1 = styled.div`
    background-color: white;
    width: ${({ size }) => {
        if (size == true) {
            return "20px"
        } else if (size == false) {
            return "50px"
        }
    }};
    height: 5px;
    border-radius: 10px;
`
export const Stick2 = styled.div`
    background-color: white;
    width: ${({ size }) => {
        if (size == true) {
            return "50px"
        } else if (size == false) {
            return "20px"
        }
    }};
    height: 5px;
    border-radius: 10px;
`

export const ButtonTitle = styled.div`
`

const showOverlay = keyframes`

`

export const Overlay = styled.div`
    position: fixed;
    display: flex;
    opacity: ${({opacity}) => opacity || "0%"};
    pointer-events: ${({opacity}) => {
        if(opacity){
            return opacity === "0%" ? "none" : "unset"
        }else{
            return "none"
        }
    }};
    right: 0;
    top: 0;
    width: 100vw;
    height: 120vh;
    background-color: black;
    color: white;
    z-index: 999;
    /* animation: name duration timing-function delay iteration-count direction fill-mode; */
`

export const OverlayContent = styled.div`
    max-width: 1870px;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
`

export const ButtonArea = styled.div`
    display: flex;
    width: 100%;
    justify-content: end;
`

export const CloseButton = styled.button`
    height: 45px;
    width: 45px;
    border-radius: 50px;
    background: #0CE271;
    border: none;

    &:hover{
        background: linear-gradient(#23C55E, #10B982, #13B8A7);
    }
`