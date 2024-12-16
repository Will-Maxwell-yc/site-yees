import React, { useState } from 'react'
import { Container, ContainerProjectList, ProjectHead, SubTitle, Wrapper } from './style'
import Title from '../../../../Components/Shared/Title/Title'
import ProjectCard from '../../../../Components/Shared/ProjectCard/ProjectCard'
import { projectList, imagesList } from '../../../../Utlits/projectList'
import Lightbox from '../../../../Components/Shared/LightBox/LightBox'


const PortfolioDetailsCard = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentId, setCurrentId] = useState(0);

    const openLightbox = (index) => {
        setCurrentId(index);
        setLightboxOpen(true);
    };


    return (
        <Wrapper>
            <Container>
                <ProjectHead>
                    <Title
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        sortTitle={"Portfólio"}
                    />
                    <SubTitle>
                        Related Work
                    </SubTitle>
                </ProjectHead>
                <ContainerProjectList>
                    {projectList
                        .slice(0, 2)
                        .map(({ heading, id, image, subHeading }, index) => (
                            <ProjectCard
                                key={id}
                                image={image}
                                heading={heading}
                                subHeading={subHeading}
                                openLightbox={openLightbox}
                                index={index}
                                hideCommonIcon={true}
                            />
                        ))}
                </ContainerProjectList>
            </Container>
            {lightboxOpen && (
                <Lightbox
                    images={imagesList}
                    setLightboxOpen={setLightboxOpen}
                    currentId={currentId}
                />
            )}
        </Wrapper>
    )
}

export default PortfolioDetailsCard