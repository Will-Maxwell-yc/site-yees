import React from "react";
import { Link } from "react-router-dom";
import { BreadcrumndWrap, Container, Content, Wrapper, Heading, BreadcrumndCont, ListItem } from "./style";

const PageHeader = ({heading, page}) => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <BreadcrumndWrap>
            <Heading>{heading}</Heading>
            <BreadcrumndCont>
              <ListItem>
                <Link to="index-2.html">Home</Link>
              </ListItem>
              <ListItem>/</ListItem>
              <ListItem>{page}</ListItem>
            </BreadcrumndCont>
          </BreadcrumndWrap>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default PageHeader;
