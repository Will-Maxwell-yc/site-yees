import React from "react";

import {  Wrapper } from "./style";
import DetailsPortfolio from "./components/ProjectInfo";
import ProjectInfo from "./components/ProjectInfo";
import TextBox from "./components/TextBox";

const PortfolioDetailsLayout = () => {
  return (
    <Wrapper>
      <DetailsPortfolio />
      <ProjectInfo />
      <TextBox />
    </Wrapper>
  );
};

export default PortfolioDetailsLayout;
