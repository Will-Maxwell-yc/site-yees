import React from "react";
import Header from "../Components/Shared/Header/Header";
import Footer from "../Components/Shared/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import Hero from "../Layouts/Home/components/Hero/index";

const Root = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? (
        <div className={`banner__section`}>
          <Header />
          <Hero />
        </div>
      ) : (
        <Header />
      )}

      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
