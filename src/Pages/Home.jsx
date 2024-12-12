import React, { useEffect, useState } from "react";
import { ScrollRestoration } from "react-router-dom";

import { images, images2 } from "../Utlits/marqueeItems";
import About from "../Components/About/About";
import Projects from "../Components/Projects/Projects";
import Metting from "../Layouts/Metting/components/index";
import Services from "../Components/Services/Services";
import WorkeProcess from "../Components/WorkeProcess/WorkeProcess";
import Blogs from "../Components/Blogs/Blogs";
import MarqueeWapper from "../Components/Shared/Marquee/MarqueeWapper";
import Preloader from "../Components/Shared/Preloader/Preloader";
import TestimonialLayout from "../Layouts/Testimonial/Testimonial";


const Home = () => {
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setIsFetching(false);
    }, 1500);
  }, []);

  return (
    <>
      {isFetching && <Preloader />}
      {/* <MarqueeWapper direction="left" images={images} /> */}
      <About />
      <MarqueeWapper direction="right" images={images2} />
      <Projects />
      <Metting />
      <Services isHeading={true} />
      <WorkeProcess />
      <TestimonialLayout />
      <Blogs />
      <ScrollRestoration/>
    </>
  );
};

export default Home;
