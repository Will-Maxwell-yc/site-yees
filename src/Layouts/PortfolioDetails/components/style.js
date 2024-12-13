import styled from "styled-components";

export const Wrapper = styled.div`
    margin-bottom: 60px;

    @media (max-width: 1199px) {
        margin-bottom: 40px;
    }
`

export const Container = styled.div`
    margin-bottom: 60px;

    @media (max-width: 1199px) {
        margin-bottom: 40px;
    }
`

export const TextOne = styled.p`
    font-size: 16px;
    margin-top: 0;
    line-height: 1.5;
    margin-bottom: 28px;

    @media (max-width: 767px) {
        font-size: 14px;
    }

    @media (max-width: 1199px) {
        margin-bottom: 15px;
    }
`

export const TextTwo = styled.p`
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 0;

    @media (max-width: 767px) {
        font-size: 14px;
    }
`

export const TextBoxHead = styled.h3`
    font-size: 32px;
    line-height: 120%;
    font-weight: 600;
    font-family: "Archia";
    margin-bottom: 30px;

    @media (max-width: 1199px) {
        margin-bottom: 20px;
        font-size: 26px;
    }
`

export const ChalengList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`

export const List = styled.li`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    font-size: 16px;
    padding-left: 16px;
    &::before {
      position: absolute;
      content: "";
      width: 6px;
      height: 6px;
      left: 0;
      border-radius: 50%;
      background: #23C55E;
    }
    &:not(:last-child) {
      margin-bottom: 20px;
    }

    @media (max-width: 1199px) {
        &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
    
`

export const DetailsSmall = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;

    @media (max-width: 1199px) {
        gap: 20px;
    }

    @media (max-width: 500px) {
        gap: 14px;
        flex-wrap: wrap;
    }
`

export const Thumb = styled.div`
    width: 100%;
`

export const Img = styled.img`
    width: 100%;
    border-radius: 8px;
`