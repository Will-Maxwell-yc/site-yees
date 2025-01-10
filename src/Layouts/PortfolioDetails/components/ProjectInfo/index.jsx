import React from 'react'
import PageHeader from "../../../../Components/Shared/PageHeader/PageHeader";
import detailbg from "../../../../assets/img/protfolio/prot-detailsbig.png";
import { socialIcons } from "../../../../Utlits/socilIcons";
import TextBox from '../TextBox';
import { Bigthumbner, Container, DetailContact, I, Img, Items, ItemsMb, Li, LinkIcon, Paragrafo, PortfolioContainer, ProtItembox, ProtLeft, Social, SubTitle, TitleH3, Wrapper } from "./style";

const ProjectInfo = () => {
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
                                <TitleH3>Project Info</TitleH3>
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
                    </Container>
                </PortfolioContainer>
            </Wrapper>
        )
    }

export default ProjectInfo
