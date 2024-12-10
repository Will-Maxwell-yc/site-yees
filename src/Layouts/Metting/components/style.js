import styled from "styled-components";

export const Section = styled.section`
  background: url("/src/assets/img/about/about-bg.png") no-repeat center center;
  background-size: cover;
  padding: 60px 0px;
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  padding-left: 10px;

  img {
    width: 100%;
  }

  @media (max-width: 1024px) {
    max-width: 400px;
  }
`;

export const Content = styled.div`
  padding-right: 60px;

  .common__sub {
    margin: 0 0 24px;

    &::after {
      display: none;
    }
  }

  .project__head {
    border-bottom: 1px solid rgb(38, 37, 37);
    padding-bottom: 30px;
    margin-bottom: 30px;
    transition: all 0.4s;

    &:hover {
      border-bottom: 1px solid var(--base);
    }
  }

  @media (max-width: 1024px) {
    padding-right: 0;
  }
`;

export const IconBox = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  transition: all 0.4s;
  padding-bottom: 30px;
  border-bottom: 1px solid rgb(38, 37, 37);
  margin-top: 20px;

  .icon {
    min-width: 60px;
    min-height: 60px;
    border-radius: 50%;
    background: var(--base);
    display: flex;
    align-items: center;
    justify-content: center;

    .i {
      font-size: 26px;
      color: var(--title);
    }
  }

  a {
    color: var(--white);
    font-size: 20px;
  }

  &:hover {
    border-bottom: 1px solid var(--base);
  }

  @media (max-width: 768px) {
    gap: 10px;

    a {
      font-size: 16px;
    }
  }
`;
