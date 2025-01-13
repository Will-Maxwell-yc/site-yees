import React from "react";

import {  Wrapper } from "./style";
import ProjectInfo from "./components/ProjectInfo";
import TextBox from "./components/TextBox";

const PortfolioDetailsLayout = () => {
  return (
    <Wrapper>
      <ProjectInfo />
      <TextBox />
    </Wrapper>
  );
};

export default PortfolioDetailsLayout;
