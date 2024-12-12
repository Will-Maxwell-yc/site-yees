import styled, { keyframes } from "styled-components";

const cir5 = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(45deg); }
`;

export const TestimonialSection = styled.section`
  overflow: hidden;

  .project__head {
    .common__sub {
      margin-bottom: 14px;
    }
    h2 {
      font-size: 40px;
    }
  }
`;

export const TestimonialWrap = styled.div`
  background: url("../../../assets/img/about/about-bg.png") no-repeat center center;
  background-size: cover;
  padding: 130px 60px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  @media (max-width: 1200px) {
    padding: 100px 40px;
  }

  @media (max-width: 576px) {
    padding: 80px 20px;
  }

  @media (max-width: 480px) {
    padding: 50px 15px;
  }
`;

export const Quote = styled.div`
  position: absolute;
  top: 99px;
  left: 290px;

  @media (max-width: 1200px) {
    left: 240px;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

export const TestShape = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  animation: ${cir5} 2s linear infinite alternate;

  @media (max-width: 992px) {
    bottom: 20px;
    right: 20px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const TestSlide = styled.div`
  text-align: center;

  .reviewer-img {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
  }

  p {
    font-size: 20px;
    color: var(--white);
    margin-bottom: 40px;
    font-style: italic;

    @media (max-width: 576px) {
      font-size: 16px;
      margin-bottom: 20px;
    }
  }
`;

export const SwiperPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;

  .swiper-pagination-bullet {
    background: var(--white);
    width: 8px;
    height: 8px;
    opacity: 1;
    position: relative;
    &::before {
      position: absolute;
      top: -6px;
      left: -6px;
      width: 20px;
      height: 20px;
      content: "";
      border: 1px solid var(--white);
      border-radius: 50%;
    }
    &.swiper-pagination-bullet-active {
      background: var(--base);
      padding: 2px;
      width: 8px;
      height: 8px;
      position: relative;
      opacity: 1;
      &::before {
        position: absolute;
        top: -6px;
        left: -6px;
        width: 20px;
        height: 20px;
        content: "";
        border: 1px solid var(--base);
        border-radius: 50%;
      }
    }
  }
`;
