import React from "react";
import Header from "../Components/Navbar/Header/Header";
import Footer from "../Components/Shared/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import Hero from "../Layouts/Home/components/Hero/index";

const Root = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      {location.pathname === "/" ? (
        <div className={`banner__section`}>
          <Hero />
        </div>
      ) : (
        <></>
      )}
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
