import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { Wrapper, MenuButton, AnimatedSticks, Stick1, Stick2, ButtonTitle, Overlay, OverlayContent, ButtonArea, CloseButton, FormArea, FormContent, FormElement, FormLabel, FormInput } from './style'

const ContactUs = () => {

    const [animateStick, setAnimateStick] = useState("")
    const [animateCloseButton, setAnimateCloseButton] = useState("")
    const [overlay, setOverlay] = useState("")

    return (
        <>
            <Wrapper>
                <MenuButton onMouseEnter={() => setAnimateStick("true")} onMouseLeave={() => setAnimateStick("false")} onClick={() => setOverlay("100%")}>
                    <AnimatedSticks>
                        <Stick1 size={animateStick}></Stick1>
                        <Stick2 size={animateStick}></Stick2>
                    </AnimatedSticks>
                    <ButtonTitle>CONTACT US</ButtonTitle>
                </MenuButton>
            </Wrapper>
            <Overlay opacity={overlay}>
                <OverlayContent>
                    <ButtonArea>
                        <CloseButton onClick={() => setOverlay("0%")} onMouseEnter={() => setAnimateCloseButton("true")} onMouseLeave={() => setAnimateCloseButton("false")} hover={animateCloseButton}>&#x2716;</CloseButton>
                    </ButtonArea>
                    <FormArea>
                        <FormContent action="" method="post">
                            <FormElement>
                                <FormLabel htmlFor="email">E-mail</FormLabel>
                                <FormInput type="text" id="email" />
                            </FormElement>
                        </FormContent>
                    </FormArea>
                </OverlayContent>
            </Overlay>
        </>
    )
}

export default ContactUs