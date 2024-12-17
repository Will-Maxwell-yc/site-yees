import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { Wrapper, MenuButton, AnimatedSticks, Stick1, Stick2, ButtonTitle, Overlay, OverlayContent, CloseButtonArea, CloseButton, FormArea, FormContent, FormTitle, FormDesc, Name, Email, Tel, TelAndSelector, FormLabel, FormInput, SelectorArea, Selector, MessageArea, TextArea, SubmitButtonArea, SubmitButton } from './style'

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
                    <ButtonTitle>CONTATO</ButtonTitle>
                </MenuButton>
            </Wrapper>
            <Overlay opacity={overlay}>
                <OverlayContent>
                    <CloseButtonArea>
                        <CloseButton onClick={() => setOverlay("0%")} onMouseEnter={() => setAnimateCloseButton("true")} onMouseLeave={() => setAnimateCloseButton("false")} hover={animateCloseButton}>&#x2716;</CloseButton>
                    </CloseButtonArea>
                    <FormArea>
                        <FormContent action="" method="post">
                            <FormTitle>CONTATO</FormTitle>
                            <FormDesc>Entre em contato. Nos conte o que precisa e nos envie sua mensagem!</FormDesc>
                            <Name>
                                <FormLabel htmlFor="nome">Nome completo: *</FormLabel>
                                <FormInput type="text" id="nome" />
                            </Name>
                            <Email>
                                <FormLabel htmlFor="email">E-mail: *</FormLabel>
                                <FormInput type="text" id="email" placeholder="" />
                            </Email>
                            <TelAndSelector>
                                <Tel>
                                    <FormLabel htmlFor="telefone">Telefone: *</FormLabel>
                                    <FormInput type="tel" id="telefone" pattern="([0-9]{3}) [0-9]{5}-[0-9]{4}" placeholder="(DDD) 99999-9999" />
                                </Tel>
                                <SelectorArea>
                                    <FormLabel htmlFor="select">Como nos encontrou?</FormLabel>
                                    <Selector id="select">
                                        <option value="indicacao">Indicação</option>
                                        <option value="redessociais">Redes Sociais</option>
                                    </Selector>
                                </SelectorArea>
                            </TelAndSelector>
                            <MessageArea>
                                <FormLabel htmlFor="textarea">Como podemos te ajudar?</FormLabel>
                                <TextArea id="textarea"></TextArea>
                            </MessageArea>
                            <SubmitButtonArea>
                                <SubmitButton>Entrar em contato </SubmitButton>
                            </SubmitButtonArea>
                        </FormContent>
                    </FormArea>
                </OverlayContent>
            </Overlay>
        </>
    )
}

export default ContactUs