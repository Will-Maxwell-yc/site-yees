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
    justify-content: end;
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: 1100px) {
        width: 50px;
    }
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
    @media (max-width: 1100px) {
        display: none;
    }
`

const showOverlay = keyframes`
    from {right: -100%}
    to {right: 0}
`
const hideOverlay = keyframes`
    from {right: 0}
    to {right: -100%}
`

export const Overlay = styled.div`
    position: fixed;
    display: flex;
    pointer-events: ${({ opacity }) => {
        if (opacity) {
            return opacity === "0%" ? "none" : "unset"
        } else {
            return "none"
        }
    }};
    right: ${({opacity}) => {
        if(opacity === "0%" || opacity === ""){
            return "-100%"
        }else{
            return "0"
        }
    }};
    animation-name: ${({opacity}) => {
        if(opacity === "100%"){
            return showOverlay
        }else if(opacity === "0%"){
            return hideOverlay
        }
    }};
    animation-duration: 0.5s;
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

export const CloseButtonArea = styled.div`
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

export const FormArea = styled.div`
    height: 78%;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FormContent = styled.form`
    border: 1px solid #0CE271;
    padding: 50px;
    width: 1000px;
    border-radius: 10px;
`

export const FormTitle = styled.h1`
    width: 100%;
    text-align: center;
    color: #0CE271;
`

export const FormDesc = styled.div`
    font-size: 35px;
    text-align: center;
`

export const TelAndSelector = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 910px) {
        flex-wrap: wrap;
    }
`

export const SelectorArea = styled.div`
    display: inline-block;
    margin: 0 0 0 20px;
    width: 100%;

    @media (max-width: 910px) {
        margin: 0;
    }
`

export const Selector = styled.select`
    width: 100%;
    height: 50px;
    border: none;
`

export const Name = styled.div``
export const Email = styled.div``
export const Tel = styled.div`
    display: inline-block;
    width: 250px;

    @media (max-width: 910px) {
        width: 100%;
    }
`

export const FormLabel = styled.label`
    display: block;
    margin: 10px 0;
    font-size: 23px;
`

export const FormInput = styled.input`
    border: none;
    height: 50px;
    width: 100%;
    padding: 10px;
`

export const MessageArea = styled.div``

export const TextArea = styled.textarea`
    width: 100%;
    height: 100px;
    resize: none;
    border: none;
`

export const SubmitButtonArea = styled.div`
    margin: 10px 0;
    display: flex;
    justify-content: end;
`

export const SubmitButton = styled.button`
    border: none;
    background-color: #0CE271;
    color: black;
    padding: 15px;
    width: 180px;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 500;
`