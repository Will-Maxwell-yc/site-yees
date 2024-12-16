import React from "react";

import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import WorkeProcess from "../../Components/WorkeProcess/WorkeProcess";
import { ScrollRestoration } from "react-router-dom";
import PortfolioComponent from "./components/PortfolioComponente";
import { Wrapper } from "./style";

const PortfolioLayout = () => {
    
    return (
        <Wrapper>
            <PageHeader heading={"My Work & Portfolio"} page="Work" />
            <PortfolioComponent />
            <WorkeProcess />
            <ScrollRestoration />
        </Wrapper>
    );
};

export default PortfolioLayout;
