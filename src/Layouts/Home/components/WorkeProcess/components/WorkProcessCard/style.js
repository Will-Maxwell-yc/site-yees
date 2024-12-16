import styled from "styled-components";

export const ProcessItem = styled.div`
    transition: all 0.4s;
    border: 2px solid rgb(38 37 37);
    border-radius: 10px;
    padding: 20px 18px;
    position: relative;
    height: 400px;

    @media (max-width: 768px){
        height: auto;
    }

    &::before {
      position: absolute;
      width: 50px;
      height: 50px;
      bottom: 0;
      right: 0;
      content: "";
      background: #121212;
      border-radius: 100px 20px 0 0;
      transition: all 0.4s;
    }
    &:hover {
    border-image-source: linear-gradient(
      to right,
      #23c55e,
      #10b982,
      #13b8a7
    );
    border-image-slice: 1;
    border-width: 2px;

    &::before {
      background: #23c55e;
    }
  }
`

export const Wrapper = styled.div`
    width: 100%;
    max-width: 600px;
    padding: 20px;

    @media (min-width: 768px) { 
        width: 50%;
    }

    @media (min-width: 992px) { 
        width: 33.3333%;
    }
`

export const Title = styled.h2`
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 24px;

    @media (max-width: 991px) {
        margin-bottom: 15px;
    }

    @media (max-width: 575px) {
        font-size: 29px;
    }
`

export const Paragafro = styled.p`
    font-size: 18px;
    line-height: 1.5;
    margin-top: 0;
    margin-bottom: 30px;
    color: #999999;

    @media (max-width: 991px) {
        margin-bottom: 20px;
    }

    @media (max-width: 767px) {
        font-size: 16px;
    }
`

export const Ul = styled.ul`
    list-style: none;
`

export const List = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    color: #999999;
    font-size: 18px;
    padding-left: 20px;

        &::before {
        position: absolute;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background: #23C55E;
        content: "";
        left: 0;
        }
        &:not(:last-child) {
          margin-bottom: 16px;
        }
`


