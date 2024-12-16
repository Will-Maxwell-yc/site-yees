import React from "react";
import Marquee from "react-fast-marquee";
import { MarqueeInner, Wrapper } from "./style";

const MarqueeWapper = ({ images, direction }) => {
  return (
    <Wrapper>
      <MarqueeInner>
        <Marquee direction={direction}>
          {
            images?.map(({ id, image }) => <img key={id} src={image} alt="" />)
          }
        </Marquee>
      </MarqueeInner>
    </Wrapper>
  );
};

export default MarqueeWapper;
