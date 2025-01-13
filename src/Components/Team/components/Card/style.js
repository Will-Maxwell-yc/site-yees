import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background: url("/src/assets/img/about/about-bg.png") no-repeat center center;
  background-size: cover;

  .swiper-wrappper{
    padding: 20px;
  }
  .swiper-slide{
    display: flex !important;
    justify-content: center;
  }

  .swiper {
    width: 100%;
    max-width: 1800px;
    display: flex !important;
    justify-content: center;

    /* .swiper-slide-active{
        margin-right: 0 !important;
    }

    .swiper-slide-next{
        margin-right: 0 !important;
    } */
  }

  .swiper-button-prev, .swiper-button-next {
    color: #0CE271;
  }

  .swiper-pagination-bullet-active {
    background: #0CE271 !important;
  }

  .swiper-pagination-bullet {
    background: #e8e8e8
  }
`

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const CardContent = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: absolute;
    color: white;
    opacity: 0.5;
    z-index: 2;
    padding: 20px;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    justify-content: flex-end;

    @media (max-width: 1030px) {
        opacity: 1;
        visibility: visible;
    }
`

export const Nome = styled.h3`
    font-size: 40px;
    color: #e8e8e8;
    margin-bottom: 10px;
    font-weight: 700;
    margin-bottom: 10px;
`

export const Heading = styled.p`
    font-size: 1rem;
    color: #e8e8e8;
`

export const Link = styled.div`
    display: inline-block;
    margin-top: 10px;
    text-decoration: none;
    display: flex;
    gap: 20px;
    font-Size: "24px";

    &:hover {
      text-decoration: underline;
    }
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    background: #000000CC;

    @media (max-width: 1030px) {
        opacity: 1;
        visibility: visible;
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 458px;
    height: 550px;
    margin: 55px 17px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: transform 1.2s ease-in-out, box-shadow 0.5s ease-in-out;

  &:hover ${CardContent}, &:hover ${Overlay} {
        opacity: 1;
        visibility: visible;
    }

    &:hover {
        transform: scale(1.05); 
    }    
`;