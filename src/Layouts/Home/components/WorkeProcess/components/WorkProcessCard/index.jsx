import React from 'react'
import { List, Paragafro, ProcessItem, Title, Ul, Wrapper } from './style'

const WorkProcessCard = ({ title, info, list }) => {
  return (
    <Wrapper
      data-aos="flip-up"
      data-aos-duration="500"
    >
      <ProcessItem>
        <Title>{title}</Title>
        <Paragafro>{info}</Paragafro>
        <Ul>
          {list.map((li, index) => (
            <List key={index}>{li}</List>
          ))}
        </Ul>
      </ProcessItem>
    </Wrapper>
  )
}

export default WorkProcessCard