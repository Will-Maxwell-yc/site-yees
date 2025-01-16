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
    right: ${({ opacity }) => {
        if (opacity === "0%" || opacity === "") {
            return "-100%"
        } else {
            return "0"
        }
    }};
    animation-name: ${({ opacity }) => {
        if (opacity === "100%") {
            return showOverlay
        } else if (opacity === "0%") {
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
    z-index: 999;
    font-size: ${({ hover }) => {
        if (hover === "true") {
            return "20px"
        } else {
            return "18px"
        }
    }};
    animation-name: ${({ hover }) => {
        if (hover === "true") {
            return mouseEnterCloseButton
        } else if (hover === "false") {
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

    @media (max-width: 910px) {
        margin-top: 0;
        height: 80%;
    }
`

export const FormContent = styled.form`
    border: 1px solid #0CE271;
    padding: 40px;
    width: 1000px;
    border-radius: 10px;

    @media (max-width: 910px) {
        padding: 25px;
    }
`

export const FormTitle = styled.h1`
    width: 100%;
    text-align: center;
    color: #0CE271;

    @media (max-width: 910px) {
        font-size: 30px;
    }

`

export const FormDesc = styled.div`
    font-size: 30px;
    text-align: center;

    @media (max-width: 966px) {
        font-size: 25px;
    }

    @media (max-width: 910px) {
        font-size: 20px;
    }

    @media (max-width: 550px) {
        font-size: 15px;
    }
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

    & option {
        width: 20px;
    }
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

    @media (max-width: 900px) {
        font-size: 20px;
        margin: 10px 0 0 0 ;
    }

    @media (max-width: 550px) {
        font-size: 15px;
    }
`

export const FormInput = styled.input`
    color: black;
    border: 2px solid ${(props) => (props.error ? "red" : "white")};
    height: 50px;
    width: 100%;
    padding: 10px;

    &:focus {
    outline: none;
    border-color: ${(props) => (props.error ? "red" : "#0CE271")};
    }

    @media (max-width: 900px) {
        max-height: 50px;
    }

    @media (max-width: 540px) {
        height: 40px;
    }
`

export const MessageArea = styled.div``

export const TextArea = styled.textarea`
    width: 100%;
    height: 100px;
    resize: none;
    border: 2px solid ${(props) => (props.error ? "red" : "white")};

    &:focus {
    outline: none;
    border-color: ${(props) => (props.error ? "red" : "#0CE271")};
    }

    @media (max-width: 540px) {
        height: 90px;
    }
`

export const SubmitButtonArea = styled.div`
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    

    @media (max-width: 540px ) {
        height: 50px;
        flex-direction: column;
        align-items: center;
    }
`

export const SubmitButton = styled.button`
    border: none;
    background-color: #0CE271;
    color: black;
    padding: 8px;
    width: 180px;
    height: 60px;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 500;

    @media (max-width: 540px ) {
        width: 100%;
    }
`

export const WrapperError = styled.div`
    @media (max-width: 669px ) {
        max-width: 300px;
    }

    @media (max-width: 590px ) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
`

export const SpanError = styled.span`
    font-size: 20px;
    color: ${(props) => (props.error ? "red" : "#0CE271")};
    @media (max-width: 590px ) {
        font-size: 15px;
    }
`