import styled from "styled-components";

export const Wrapper = styled.div`
    padding-bottom: 120px;
    padding-top: 120px;

    background: url("/src/assets/img/about/about-bg.png") no-repeat center center;
    background-size: cover;
    overflow: hidden;

    @media (max-width: 1199px) {
        padding-bottom: 100px;
        padding-top: 100px;
    }

    @media (max-width: 991px) {
        padding-bottom: 80px;
        padding-top: 80px;
    }
`

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;

    @media (min-width: 576px) {
        max-width: 540px; 
    }

    @media (min-width: 768px) {
        max-width: 720px;
    }

    @media (min-width: 992px) {
        max-width: 960px; 
    }
    
    @media (min-width: 1200px) {
        max-width: 1350px;
        margin: 0 auto;
    }

`

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
`