import React from "react";
import { ArrowUpRight } from "react-bootstrap-icons";
import { Content, Img, LeftCont, Span, Thumb, Wrapper, H3, CommonIcon, Icon } from "./style";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({
  image,
  heading,
  subHeading,
  index,
  openLightbox,
  navigate,
  hideCommonIcon
}) => {

  const ClickNavigate = useNavigate()

  const handleNavigation = () => {
    ClickNavigate("/protfolio-details")
  }

  return (
    <Wrapper
      index={index}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Thumb  onClick={() => openLightbox(index)} >
        <Img src={image} alt="img" />
      </Thumb>
      <Content>
        <LeftCont href={navigate}>
          <Span>
            {heading}
          </Span>
          <H3>{subHeading}</H3>
        </LeftCont>
        {!hideCommonIcon && ( 
          <CommonIcon onClick={handleNavigation} >
            <Icon>
              <ArrowUpRight />
            </Icon>
          </CommonIcon>
        )}
      </Content>
    </Wrapper>
  );
};

export default ProjectCard;
