import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { menuList } from "../menuList/menuList";

import { Wrapper, MenuButton, AnimatedSticks, Stick1, Stick2, ButtonTitle, Overlay, OverlayContent, ButtonArea, CloseButton, MenuTitle, NavContent, NavLinks, NavLink } from './style'

const NavMenu = () => {

    const [animateStick, setAnimateStick] = useState("")
    const [animateCloseButton, setAnimateCloseButton] = useState("")
    const [overlay, setOverlay] = useState("")
    const [animateLink, setAnimateLink] = useState("")

    return (
        <>
            <Wrapper>
                <MenuButton onMouseEnter={() => setAnimateStick("true")} onMouseLeave={() => setAnimateStick("false")} onClick={() => setOverlay("100%")}>
                    <ButtonTitle>MENU</ButtonTitle>
                    <AnimatedSticks>
                        <Stick1 size={animateStick}></Stick1>
                        <Stick2 size={animateStick}></Stick2>
                    </AnimatedSticks>
                </MenuButton>
            </Wrapper>
            <Overlay opacity={overlay}>
                <OverlayContent>
                    <ButtonArea>
                        <CloseButton
                            onClick={() => {
                                setOverlay("0%")
                                setAnimateLink("")
                            }}
                            onMouseEnter={() => setAnimateCloseButton("true")}
                            onMouseLeave={() => setAnimateCloseButton("false")}
                            hover={animateCloseButton}
                        >
                            &#x2716;
                        </CloseButton>
                        <MenuTitle>MENU</MenuTitle>
                        <div></div>
                    </ButtonArea>
                    <NavContent>
                        <NavLinks>
                            {menuList.map((elem, index) => {
                                return <NavLink hover={animateLink === index ? "true" : "false"} key={index}>
                                    <HashLink
                                        to={`${elem.path}${elem.section ? elem.section : ""}`}
                                        key={`${elem.name}${index}`}
                                        onClick={() => {
                                            setOverlay("0%")
                                            setAnimateLink("")
                                        }}
                                        onMouseEnter={() => setAnimateLink(index)}
                                    >
                                        {elem.name}
                                    </HashLink>
                                </NavLink>
                            })}
                        </NavLinks>
                    </NavContent>
                </OverlayContent>
            </Overlay>
        </>
    )
}

export default NavMenu