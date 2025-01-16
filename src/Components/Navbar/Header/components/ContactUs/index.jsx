import React, { useState } from "react";

import { Wrapper, MenuButton, AnimatedSticks, Stick1, Stick2, ButtonTitle, Overlay, OverlayContent, CloseButtonArea, CloseButton, FormArea, FormContent, FormTitle, FormDesc, Name, Email, Tel, TelAndSelector, FormLabel, FormInput, SelectorArea, Selector, MessageArea, TextArea, SubmitButtonArea, SubmitButton, WrapperError, SpanError } from './style'

const ContactUs = () => {
    const [animateStick, setAnimateStick] = useState("");
    const [animateCloseButton, setAnimateCloseButton] = useState("");
    const [overlay, setOverlay] = useState("");
    const [submitStatus, setSubmitStatus] = useState(null);


    const [mailData, setMailData] = useState({
        name: "",
        message: "",
        telefone: "",
        select: ""
    })

    const [fieldErrors, setFieldErrors] = useState({
        name: false,
        message: false,
        telefone: false,
    })

    const formatTelefone = (value) => {
        // Remove tudo que não é número
        const numericValue = value.replace(/\D/g, "");

        // Limita o número de dígitos a 11
        const maxLength = 11;
        const limitedValue = numericValue.slice(0, maxLength);

        // Aplica a formatação: (XX) 9XXXX-XXXX
        if (limitedValue.length > 10) {
            return `(${limitedValue.slice(0, 2)}) ${limitedValue.slice(2, 7)}-${limitedValue.slice(7, 11)}`;
        } else if (limitedValue.length > 6) {
            return `(${limitedValue.slice(0, 2)}) ${limitedValue.slice(2, 7)}-${limitedValue.slice(7)}`;
        } else if (limitedValue.length > 2) {
            return `(${limitedValue.slice(0, 2)}) ${limitedValue.slice(2)}`;
        } else if (limitedValue.length > 0) {
            return `(${limitedValue}`;
        }

        return limitedValue;
    };


    const { name, message, telefone } = mailData;
    const [error, setError] = useState(null);

    const onChange = (e) => {
        const { name, value } = e.target;

        if (name === "telefone") {
            setMailData({ ...mailData, [name]: formatTelefone(value) });
        } else {
            setMailData({ ...mailData, [name]: value });
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();

        // Validar campos
        const isTelefoneValid = /^\(\d{2}\) 9\d{4}-\d{4}$/.test(telefone)

        const errors = {
            name: name.trim() === "",
            message: message.trim() === "",
            telefone: telefone.trim() === "" || !isTelefoneValid,
        };

        setFieldErrors(errors);

        // Se houver erro, não prosseguir
        if (Object.values(errors).some((error) => error)) {
            setSubmitStatus(false);
            return;
        }

        const body = `Nome: ${name}
    
        Mensagem: ${message}
        Telefone: ${telefone}
        ${mailData.select && mailData.select !== "" ? `Como nos encontrou: ${mailData.select}` : ""}`

        // Criar o link mailto
        const mailtoLink = `mailto:leisoj58@gmail.com?subject=Mensagem de ${encodeURIComponent(
            name
        )}&body=${encodeURIComponent(body)}`

        console.log(body)
        console.log(mailData.select)
        // Abrir cliente de e-mail
        window.location.href = mailtoLink;

        // Limpar o formulário
        setMailData({ name: "", message: "", telefone: "", select: "" });

        // Mostrar mensagem de sucesso
        setSubmitStatus(true);
    };

    // Fechar o formulário e limpar mensagens
    const closeForm = () => {
        setOverlay("0%");
        setSubmitStatus(null); // Limpa a mensagem de sucesso/erro
        setFieldErrors({ name: false, message: false, telefone: false }); // Limpa feedback visual
    };

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
                        <CloseButton onClick={closeForm} onMouseEnter={() => setAnimateCloseButton("true")} onMouseLeave={() => setAnimateCloseButton("false")} hover={animateCloseButton}>&#x2716;  </CloseButton>
                    </CloseButtonArea>
                    <FormArea>
                        <FormContent action="" method="post">
                            <FormTitle>CONTATO</FormTitle>
                            <FormDesc>Entre em contato. Nos conte o que precisa e nos envie sua mensagem!</FormDesc>
                            <Name>
                                <FormLabel htmlFor="nome" style={{ color: fieldErrors.name ? 'red' : 'white' }}>Nome completo: *</FormLabel>
                                <FormInput
                                    type="text"
                                    id="nome"
                                    name="name"
                                    value={name}
                                    onChange={(e) => onChange(e)}
                                    error={fieldErrors.name}
                                />
                            </Name>
                            <TelAndSelector>
                                <Tel>
                                    <FormLabel htmlFor="telefone" style={{ color: fieldErrors.telefone ? 'red' : 'white' }}>Telefone: *</FormLabel>
                                    <FormInput
                                        type="tel"
                                        id="telefone"
                                        value={telefone}
                                        name="telefone"
                                        placeholder="(DD) 99999-9999"
                                        onChange={(e) => onChange(e)}
                                        error={fieldErrors.telefone}
                                    />
                                </Tel>
                                <SelectorArea>
                                    <FormLabel htmlFor="select" >Como nos encontrou? (Opcional)</FormLabel>
                                    <Selector id="select" name="select" onChange={(e) => onChange(e)} value={mailData.select}>
                                        <option value="">Selecione</option>
                                        <option value="indicacao">Indicação</option>
                                        <option value="redessociais">Redes Sociais</option>
                                    </Selector>
                                </SelectorArea>
                            </TelAndSelector>
                            <MessageArea>
                                <FormLabel htmlFor="textarea" style={{ color: fieldErrors.message ? 'red' : 'white' }}>Como podemos te ajudar? *</FormLabel>
                                <TextArea
                                    id="textarea"
                                    name="message"
                                    value={message}
                                    onChange={(e) => onChange(e)}
                                    error={fieldErrors.message}
                                />
                            </MessageArea>
                            <SubmitButtonArea>
                                <SubmitButton onClick={onSubmit}>
                                    Entrar em contato
                                </SubmitButton>
                                <WrapperError
                                    style={{
                                        display: submitStatus === null ? "none" : "block",
                                    }}
                                >
                                    <SpanError
                                        error={!submitStatus}
                                    >
                                        {submitStatus
                                            ? "Sua mensagem foi recebida."
                                            : "Preencha os campos obrigatórios"}
                                    </SpanError>
                                </WrapperError>
                            </SubmitButtonArea>
                        </FormContent>
                    </FormArea>
                </OverlayContent>
            </Overlay>
        </>
    );
};

export default ContactUs;
