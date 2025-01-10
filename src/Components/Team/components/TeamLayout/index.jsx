import React from 'react'
import { Container, Wrapper } from './style'
import Card from '../Card'
import Title from '../../../Shared/Title/Title'

const TeamLayout = () => {
  return (
    <Wrapper>
      <Container>
        <Title
          mainTitle={"Conheça nosso time"}
          sortTitle={"Equipe"}
        />
        <Card />
      </Container>
    </Wrapper>
  )
}

export default TeamLayout