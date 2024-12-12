import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
`

export const MenuButton = styled.div`
    height: 50px;
    width: 160px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
`

export const AnimatedSticks = styled.div`
    display: flex;
    width: 50px;
    flex-direction: column;
    align-items: end;
    gap: 10px;
`

const mouseEnterSticks = keyframes`
    from {width: 30px}
    to {width: 50px}
`
const mouseLeaveSticks = keyframes`
    from {width: 50px}
    to {width: 30px}
`

export const Stick1 = styled.div`
    background-color: white;
    width: ${({ size }) => {
        if (size === "true") {
            return "30px"
        } else {
            return "50px"
        }
    }};
    animation-name: ${({ size }) => {
        if (size === "true") {
            return mouseLeaveSticks
        } else if (size === "false") {
            return mouseEnterSticks
        }
    }};
    animation-duration: 0.5s;
    height: 5px;
    border-radius: 10px;
`
export const Stick2 = styled.div`
    background-color: white;
    width: ${({ size }) => {
        if (size == "true") {
            return "50px"
        } else {
            return "30px"
        }
    }};
    animation-name: ${({ size }) => {
        if (size === "true") {
            return mouseEnterSticks
        } else if (size === "false") {
            return mouseLeaveSticks
        }
    }};
    animation-duration: 0.5s;
    height: 5px;
    border-radius: 10px;
`

export const ButtonTitle = styled.div`
`

export const Overlay = styled.div`
    position: fixed;
    display: flex;
    opacity: ${({ opacity }) => opacity || "0%"};
    pointer-events: ${({ opacity }) => {
        if (opacity) {
            return opacity === "0%" ? "none" : "unset"
        } else {
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

const mouseEnterCloseButton = keyframes`
    from {transform: rotate(0)}
    to {transform: rotate(360deg)}
`
const mouseLeaveCloseButton = keyframes`
    from {transform: rotate(360deg)}
    to {transform: rotate(0)}
`

export const CloseButton = styled.button`
    height: 45px;
    width: 45px;
    line-height: 45px;
    border-radius: 50px;
    background: #23C55E;
    border: none;
    font-size: ${({ hover }) => {
        if (hover === "true") {
            return "20px"
        } else {
            return "18px"
        }
    }};
    animation-name: ${({hover}) => {
        if(hover === "true"){
            return mouseEnterCloseButton
        }else if(hover === "false"){
            return mouseLeaveCloseButton
        }
    }};
    animation-duration: 0.5s;
    &:hover{
        background: linear-gradient(#23C55E, #10B982, #13B8A7);
    }
`

export const NavContent = styled.div`
    background-color: grey;
    height: 78%;
    margin-top: 20px;
`