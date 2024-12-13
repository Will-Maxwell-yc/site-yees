import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { imagesList, projectList } from "../../Utlits/projectList";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import detailbg from "../../assets/img/protfolio/prot-detailsbig.png";
import detailbg1 from "../../assets/img/protfolio/prot-detials2.png";
import detailbg2 from "../../assets/img/protfolio/prot-detials2.png";
import ProjectCard from "../../Components/Shared/ProjectCard/ProjectCard";
import Lightbox from "../../Components/Shared/LightBox/LightBox";
import { socialIcons } from "../../Utlits/socilIcons";
import { Bigthumbner, Container, DetailContact, I, Img, Items, ItemsMb, Li, LinkIcon, Paragrafo, PortfolioContainer, ProtItembox, ProtLeft, Social, SubTitle, Title, Wrapper } from "./style";
import TextBox from "./components";

const PortfolioDetails = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentId, setCurrentId] = useState(0);

  const openLightbox = (index) => {
    setCurrentId(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  return (
    <Wrapper>
      <PageHeader
        heading={"Brand Identity & Motion Design"}
        page="Brand Identity & Motion Design"
      />
      <PortfolioContainer>
        <Container>
          <Bigthumbner
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Img src={detailbg} alt="img" />
            <DetailContact>
              <Title>Project Info</Title>
              <ProtItembox>
                <ProtLeft>
                  <ItemsMb>
                    <SubTitle>Clients</SubTitle>
                    <Paragrafo>Nicolas Marko</Paragrafo>
                  </ItemsMb>
                  <Items>
                    <SubTitle>Date</SubTitle>
                    <Paragrafo>Sept 19, 2023</Paragrafo>
                  </Items>
                </ProtLeft>
                <ProtLeft>
                  <ItemsMb>
                    <SubTitle>Category</SubTitle>
                    <Paragrafo>Branding Design</Paragrafo>
                  </ItemsMb>
                  <Items>
                    <SubTitle>Location</SubTitle>
                    <Paragrafo>24 Fifth st.,Los Angeles, USA</Paragrafo>
                  </Items>
                </ProtLeft>
              </ProtItembox>
              <Social>
                {socialIcons.map(({ icon, id, src }) => (
                  <Li key={id}>
                    <LinkIcon href={src} target="_blank" rel="noopener noreferrer" >
                      <I>{icon}</I>
                    </LinkIcon>
                  </Li>
                ))}
              </Social>
            </DetailContact>
          </Bigthumbner>
          <TextBox />
        </Container>
      </PortfolioContainer>

      <section className="protfolidetails__section cmn__bg pt-120 pb-120">
        <div className="container">
          <div className="project__head text-center">
            <span
              className="common__sub"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Protfolio
            </span>
            <h2 className="fw-500" data-aos="fade-up" data-aos-duration="1000">
              Related Work
            </h2>
          </div>

          <div className=" project__wrapone">
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
                />
              ))}
          </div>
        </div>
        {lightboxOpen && (
          <Lightbox
            images={imagesList}
            onClose={closeLightbox}
            currentId={currentId}
          />
        )}
      </section>
    </Wrapper>
  );
};

export default PortfolioDetails;
