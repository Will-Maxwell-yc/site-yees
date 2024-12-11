import React from "react";
import {  Common, SubTitle, Wrapper } from "./style";

const Title = ({ mainTitle, sortTitle }) => {
  return (
    <Wrapper>
      <Common data-aos="fade-down" data-aos-duration="1000">
        {sortTitle}
      </Common>
      <SubTitle data-aos="fade-up" data-aos-duration="1200">
        {mainTitle}
      </SubTitle>
    </Wrapper>
  );
};

export default Title;
