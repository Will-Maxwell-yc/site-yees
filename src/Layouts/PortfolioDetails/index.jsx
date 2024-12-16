import React from "react";

import {  Wrapper } from "./style";
import DetailsPortfolio from "./components/ProjectInfo";
import ProjectInfo from "./components/ProjectInfo";

const PortfolioDetailsLayout = () => {
  return (
    <Wrapper>
      <DetailsPortfolio />
      <ProjectInfo />
    </Wrapper>
  );
};

export default PortfolioDetailsLayout;
