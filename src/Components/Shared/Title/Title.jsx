import React from "react";
import { CommonSub, SubTitle, Wrapper } from "./style";

const Title = ({ mainTitle, sortTitle }) => {
  return (
    <Wrapper>
      <CommonSub>
        {sortTitle}
      </CommonSub>
      <SubTitle data-aos="fade-up" data-aos-duration="1200">
        {mainTitle}
      </SubTitle>
    </Wrapper>
  );
};

export default Title;
