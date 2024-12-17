import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
`

export const MenuButton = styled.div`
    height: 50px;
    width: 110px;
    cursor: pointer;
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
    align-items: start;
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
    background-color: #E8E8E8;
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
    background-color: #E8E8E8;
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
    from {left: -100%}
    to {left: 0}
`
const hideOverlay = keyframes`
    from {left: 0}
    to {left: -100%}
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
    left: ${({ opacity }) => {
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
    color: #E8E8E8;
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
    justify-content: space-between;

    & div {
        width: 45px;
    }
`

export const MenuTitle = styled.div`
    display: none;
    @media (max-width: 1140px) {
        width: 120px !important;
        height: 45px;
        line-height: 45px;
        font-size: 38px;
        text-align: center;   
    }
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

export const NavContent = styled.div`
    height: 58%;
    margin: 30px;
    display: flex;
    align-items: center;
`

export const NavLinks = styled.div`
    @media (max-width: 1140px) {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`

const mouseEnterLinkContainer = keyframes`
    from {
        width: 500px;
        height: 50px;
        line-height: 50px;
    }
    to {
        width: 700px;
        height: 120px;
        line-height: 120px;
    }
`
const mouseEnterLink = keyframes`
    from {
        color: #E8E8E8;
        font-size: 48px;
    }
    to {
        color: #23C55E;
        font-size: 84px;
    }
`
const mouseLeaveLinkContainer = keyframes`
    from {
        width: 700px;
        height: 120px;
        line-height: 120px;
    }
    to {
        width: 500px;
        height: 50px;
        line-height: 50px;
    }
`
const mouseLeaveLink = keyframes`
    from {
        color: #23C55E;
        font-size: 84px;
    }
    to {
        color: #E8E8E8;
        font-size: 48px;
    }
`

export const NavLink = styled.div`
    width: ${({ hover }) => {
        if (hover === "true") {
            return "700px"
        } else {
            return "500px"
        }
    }};
    height: ${({ hover }) => {
        if (hover === "true") {
            return "120px"
        } else {
            return "50px"
        }
    }};
    line-height: ${({ hover }) => {
        if (hover === "true") {
            return "120px"
        } else {
            return "50px"
        }
    }};
    margin: 20px 10px;
    display: inline-block;
    justify-content: center;
    text-align: center;
    animation-name: ${({ hover }) => {
        if (hover === "true") {
            return mouseEnterLinkContainer
        } else if (hover === "false") {
            return mouseLeaveLinkContainer
        }
    }};
    animation-duration: 0.5s;

    @media (max-width: 1340px) {
        animation: none;
        width: 500px;
        height: 50px;
        line-height: 50px;
    }

    @media (max-width: 450px) {
        width: 100%;
        margin: 30px 0;
    }

    & a {
        text-align: center;
        color: ${({ hover }) => {
        if (hover === "true") {
            return "#23C55E"
        } else {
            return "#E8E8E8"
        }
    }};
        font-size: ${({ hover }) => {
        if (hover === "true") {
            return "84px"
        } else {
            return "48px"
        }
    }};
        animation-name: ${({ hover }) => {
        if (hover === "true") {
            return mouseEnterLink
        } else if (hover === "false") {
            return mouseLeaveLink
        }
    }};
        animation-duration: 0.5s;

        @media (max-width: 1340px) {
            animation: none;   
        }

        @media (max-width: 1140px) {
            font-size: ${({ hover }) => {
            if (hover === "true") {
                return "84px"
            } else {
                return "58px"
            }}}
        }

        @media (max-width: 450px) {
            font-size: 58px;
        }
    }
`