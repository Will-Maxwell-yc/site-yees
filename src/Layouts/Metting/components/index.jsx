import React from "react";
import { Envelope, GeoAlt } from "react-bootstrap-icons";
import mettingImag from "../../../assets/img/project/project-need.png";

import { Section, ImageWrapper, Content, IconBox } from "./style";

const MettingLayout = () => {
    return (
        <Section>
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-7">
                        <Content>
                            <div className="project__head">
                                <span
                                    className="common__sub"
                                    data-aos="fade-down"
                                    data-aos-duration="1000"
                                >
                                    Need a Project?
                                </span>
                                <h2
                                    data-aos="fade-down"
                                    data-aos-duration="1600"
                                >
                                    Let's work together. Fixed a meeting
                                </h2>
                            </div>
                            <IconBox data-aos="fade-up" data-aos-duration="1000">
                                <span className="icon">
                                    <Envelope className="i" />
                                </span>
                                <span className="box">
                                    <span className="ptext">Email</span>
                                    <a href="#0">davidmatias333@gmail.com</a>
                                </span>
                            </IconBox>
                            <IconBox data-aos="fade-up" data-aos-duration="1500">
                                <span className="icon">
                                    <GeoAlt className="i" />
                                </span>
                                <span className="box">
                                    <span className="ptext">Location</span>
                                    <a href="#0">Victoria Street London, England</a>
                                </span>
                            </IconBox>
                        </Content>
                    </div>
                    <div className="col-lg-5">
                        <ImageWrapper data-aos="zoom-in" data-aos-duration="2000">
                            <img src={mettingImag} alt="img" />
                        </ImageWrapper>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default MettingLayout;
