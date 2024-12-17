import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`

export const Image = styled.img`
    width: 150px;
    height: 100%;

    @media (max-width: 1100px) {
        width: 50px;
    }
`