import React, { useEffect, useState } from "react";
import { ScrollRestoration } from "react-router-dom";

import { images, images2 } from "../Utlits/marqueeItems";
import About from "../Components/About/About";
import Projects from "../Layouts/Home/components/Projects/Projects";
import Metting from "../Components/Metting/Metting";
import Services from "../Components/Services/Services";
import WorkeProcess from "../Layouts/Home/components/WorkeProcess/WorkeProcess";
import Testimonial from "../Components/Testimonial/Testimonial";
import Blogs from "../Components/Blogs/Blogs";
import MarqueeWapper from "../Components/Shared/Marquee/MarqueeWapper";
import Awards from "../Components/About/Awards";


const Home = () => {
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setIsFetching(false);
    }, 1500);
  }, []);

  return (
    <>
      {/* <MarqueeWapper direction="left" images={images} /> */}
      <About />
      <MarqueeWapper images={images2} />
      <Awards />
      <Projects />
      <Metting />
      <Services isHeading={true} />
      <WorkeProcess />
      <Testimonial />
      <Blogs />
      <ScrollRestoration/>
    </>
  );
};

export default Home;
