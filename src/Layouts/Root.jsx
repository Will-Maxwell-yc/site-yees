import React from "react";
import Header from "../Components/Navbar/Header/Header";
import Footer from "../Components/Shared/Footer/Footer";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Banner from "../Components/Banner/Banner";

const Root = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      {location.pathname === "/" ? (
        <div className={`banner__section`}>
          <Banner />
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
