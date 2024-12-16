import styled from "styled-components";

export const Wrapper = styled.div`
    font-size: 36px;
    padding: 13px 0;
    font-size: 36px;
    height: 90px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 7px;

    background: linear-gradient(
        to right,
        #23c55e,
        #10b982,
        #13b8a7
    );
    -webkit-background-clip: border-box;
    -webkit-text-fill-color: unset;
  

    @media (max-width: 767px) {
        height: 70px;
        padding: 1px 0;
    }
`

export const MarqueeInner = styled.div``