import React, { useEffect, useState } from "react";

import Title from "../Shared/Title/Title";
import Lightbox from "../Shared/LightBox/LightBox";
import ProjectCard from "../Shared/ProjectCard/ProjectCard";
import { imagesList, projectList } from "../../Utlits/projectList";
import { Link } from "react-router-dom";
import { Wrapper } from "./style";
import ProjectsLayout from "./components";

const Projects = () => {
  

  return (
    <Wrapper>
      <ProjectsLayout/>
    </Wrapper>
  );
};

export default Projects;
