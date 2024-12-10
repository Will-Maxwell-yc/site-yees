import styled from "styled-components";

export const Wrapper = styled.div``

export const Common = styled.span`
    font-size: 24px;
    font-family: "Caveat", cursive;
    position: relative;
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: center;
    width: 333px;
    margin: 0 auto 30px;
    background: linear-gradient(
    to right,
    #23c55e,
    #10b982,
    #13b8a7
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;


    &::after,
    &::before {
        position: absolute;
        content: "";
    }

    &::before {
        left: 0;
        width: 80px;
        height: 1px;
        background: #23C55E;
    }

    &::after {
        right: 0;
        width: 80px;
        height: 1px;
        background: #23C55E;
    }

    @media (max-width: 480px) { 
        width: 280px;
        gap: 14px;

        &::before {
        left: 0;
        width: 50px;
        height: 1px;
        background: var(--base);
        }

        &::after {
        right: 0;
        width: 50px;
        height: 1px;
        background: var(--base);
        }
    }
`