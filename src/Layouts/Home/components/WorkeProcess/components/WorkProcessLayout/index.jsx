import React from 'react'
import { Container, Row, Wrapper } from './style';
import Title from '../../../../../../Components/Shared/Title/Title';
import WorkProcessCard from '../WorkProcessCard';

const processList = [
  {
    id: 1,
    title: "Concept",
    info: "Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit",
    list: [
      "Reviewing any existing branding",
      "Target audience and competitors research",
      "Developing a strategy",
    ],
  },
  {
    id: 2,
    title: "Design",
    info: "Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit",
    list: [
      "Developing wireframes and mockup",
      "Choosing typography, color palettes,",
      "Refining the design",
    ],
  },
  {
    id: 3,
    title: "Webflow",
    info: "Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit",
    list: [
      "Testing the website thoroughly launch",
      "Choosing typography, color palettes,",
      "Refining the design",
    ],
  },
];

const WorkProcessLayout = () => {
  return (
    <Wrapper>
      <Container>
        <Title
          mainTitle="Your Dream Website In Just Few Steps"
          sortTitle="Working Process"
        />
        <Row>
          {processList.map(({ id, info, list, title }) => (
            <WorkProcessCard key={id} info={info} list={list} title={title} />
          ))}
        </Row>
      </Container>
    </Wrapper>
  )
}

export default WorkProcessLayout