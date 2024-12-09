import styled from "styled-components";

export const Section = styled.section`
  overflow: hidden;
  padding: 120px 0;
  background: #f8f9fa;
`;

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
`;

export const Column = styled.div`
  flex: ${(props) => (props.lg ? "0 0 58.3333%" : "0 0 41.6667%")};
  max-width: ${(props) => (props.lg ? "58.3333%" : "41.6667%")};
`;

export const Content = styled.div`
  .common__sub {
    font-size: 16px;
    color: #ff6347;
  }

  h2 {
    font-weight: 500;
    margin: 1rem 0;
    color: #333;
  }
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;

  .icon {
    font-size: 24px;
    color: #007bff;
    margin-right: 10px;
  }

  .box {
    .ptext {
      font-size: 18px;
      color: #666;
    }

    a {
      text-decoration: none;
      color: #007bff;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const ImageWrapper = styled.div`
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
  }
`;
