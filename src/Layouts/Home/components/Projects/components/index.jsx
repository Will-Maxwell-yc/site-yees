import React, {useState} from 'react'
import { Container, CustomHover, ProjectSection, ProjectWrapone, Box, Icon, TextMore, HoverCircle } from './style';
import Title from '../../../../../Components/Shared/Title/Title'
import Lightbox from '../../../../../Components/Shared/LightBox/LightBox';
import { projectList, imagesList } from '../../../../../Utlits/projectList';
import ProjectCard from '../../../../../Components/Shared/ProjectCard/ProjectCard';
import { useNavigate } from 'react-router-dom';

const ProjectsLayout = () => {
    const [currentId, setCurrentId] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const navigate = useNavigate()

    const handleNavigation = () => {
        navigate("/portfólio")
    }

    const openLightbox = (index) => {
        setCurrentId(index);
        setLightboxOpen(true);
    };
  return (
      <ProjectSection>
        <Container>
            <Title 
                mainTitle={"Look at my portfolio and give me your feedback"}
                sortTitle={"Complete Project"}
            />
              <ProjectWrapone>
                  {projectList.map(({ heading, id, image, subHeading }, index) => (
                      <ProjectCard
                          key={id}
                          image={image}
                          heading={heading}
                          subHeading={subHeading}
                          openLightbox={openLightbox}
                          index={index}
                          navigate="/portfólio"
                      />
                  ))}
              </ProjectWrapone>
              <CustomHover>
                  <HoverCircle 
                    onClick={handleNavigation}
                    data-aos="zoom-out-down"
                    data-aos-duration="2000"
                  >
                      <Box>
                          <Icon className="bIcon bi-arrow-up-right"></Icon>
                          <TextMore > Click More Work </TextMore>
                      </Box>
                  </HoverCircle>
              </CustomHover>
        </Container>
          {lightboxOpen && (
              <Lightbox
                  images={imagesList}
                  setLightboxOpen={setLightboxOpen}
                  currentId={currentId}
              />
          )}
      </ProjectSection>
  )
}

export default ProjectsLayout