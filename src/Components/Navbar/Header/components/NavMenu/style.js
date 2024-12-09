import styled from "styled-components";

export const NavItens = styled.ul`
    display: flex;
    width: 900px;
    justify-content: space-around;
    align-items: center;
`

export const NavItem = styled.li`
    & a {
        font-family: "Inter"!important;
        color: #E8E8E8;
        font-size: 14px;
        font-weight: 500;
        padding: 40px 29px;
        text-transform: uppercase;
    }
    & a:hover {
        color: #0CE271;
    }
`

export const Dropdown = styled.ul`
    display: ${({visible}) => visible == false ? "none" : "inline"};
`

export const ContactButton = styled.div`
    & a {
        background-color: #0CE271;
        padding: 20px 39px;
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
