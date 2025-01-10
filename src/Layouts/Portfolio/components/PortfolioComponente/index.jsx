import React, {useState} from 'react'
import { Wrapper, ProjectSection, Container, Singletab, TabLinks, NavLink, TabContents, ProjectWrapone, Button } from './style'
import { imagesList, projectList } from "../../../../Utlits/projectList"
import ProjectCard from '../../../../Components/Shared/ProjectCard/ProjectCard';
import Lightbox from '../../../../Components/Shared/LightBox/LightBox'; 

const categoryList = [
    {
        id: 1,
        categoryName: "All",
        value: "all",
    },
    {
        id: 2,
        categoryName: "Branding-app",
        value: "branding_app",
    },
    {
        id: 3,
        categoryName: "Los-App",
        value: "los_app",
    },
    {
        id: 4,
        categoryName: "Landing Page",
        value: "landing_page",
    },
    {
        id: 5,
        categoryName: "Website",
        value: "website",
    },
];

const PortfolioComponent = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentId, setCurrentId] = useState(0);
    const [currentCategory, setCurrentCategory] = useState("all");

    // ---------- Filer project by category
    let filterProject = [];

    for (const iterator of projectList) {
        for (const cet of iterator.category) {
            if (cet === currentCategory) {
                filterProject.push(iterator);
            }
        }
    }

    const openLightbox = (index) => {
        setCurrentId(index);
        setLightboxOpen(true);
    };
    
    return (
        <Wrapper>
            <ProjectSection>
                <Container>
                    <Singletab>
                        <TabLinks data-aos="fade-down" data-aos-duration="2000">
                            {categoryList.map(({ id, categoryName, value }) => (
                                <NavLink
                                    key={id}
                                    className={`nav-links ${currentCategory === value ? 'active' : ''}`}
                                >
                                    <Button
                                        onClick={() => setCurrentCategory(value)}
                                    >
                                        {categoryName}
                                    </Button>
                                </NavLink>
                            ))}
                        </TabLinks>
                        <TabContents >
                            <ProjectWrapone>
                                {filterProject.map(
                                    ({ heading, id, image, subHeading }, index) => (
                                        <ProjectCard
                                            key={id}
                                            image={image}
                                            heading={heading}
                                            subHeading={subHeading}
                                            openLightbox={openLightbox}
                                            index={index}
                                            navigate="/protfolio-details"
                                        />
                                    )
                                )}
                            </ProjectWrapone>
                        </TabContents>
                    </Singletab>
                </Container>
                {lightboxOpen && (
                    <Lightbox
                        images={imagesList}
                        setLightboxOpen={setLightboxOpen}
                        currentId={currentId}
                    />
                )}
            </ProjectSection>
        </Wrapper>
    )
}

export default PortfolioComponent