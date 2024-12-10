import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { menuList } from "../menuList/menuList";

import { Wrapper, ContactButton, Text, Icon, MenuButton, AnimatedSticks, Stick1, Stick2, ButtonTitle, Overlay, OverlayContent, ButtonArea, CloseButton } from './style'

import { ArrowRight } from "react-bootstrap-icons";

const NavMenu = () => {

    const [animateStick, setAnimateStick] = useState("")
    const [overlay, setOverlay] = useState("")

    return (
        <>
            <Wrapper>
                <ContactButton>
                    <Link
                        to="/contact"
                    >
                        <Text>Bora Papear</Text>
                        <Icon>
                            <ArrowRight />
                        </Icon>
                    </Link>
                </ContactButton>
                <MenuButton onMouseEnter={() => setAnimateStick(true)} onMouseLeave={() => setAnimateStick(false)} onClick={() => setOverlay("100%")}>
                    <AnimatedSticks>
                        <Stick1 size={animateStick}></Stick1>
                        <Stick2 size={animateStick}></Stick2>
                    </AnimatedSticks>
                    <ButtonTitle>MENU</ButtonTitle>
                </MenuButton>
            </Wrapper>
            <Overlay opacity={overlay}>
                <OverlayContent>
                    <ButtonArea>
                        <CloseButton onClick={() => setOverlay("0%")}>&#x2716;</CloseButton>
                    </ButtonArea>
                </OverlayContent>
            </Overlay>
        </>
    )
}

export default NavMenu