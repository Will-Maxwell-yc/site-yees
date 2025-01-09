import React, { useState } from 'react'
import { Card, Container, ContainerCard, Img, Wrapper, TitleProject, Texto, Overlay, Content } from './style'
import Title from '../../../Components/Shared/Title/Title'
import { TeamList } from '../../../Utlits/TeamList';
import { useLocation } from 'react-router-dom';

const PortfólioTeam = () => {
  const location = useLocation();
  const { id } = location.state || {};

  const member = TeamList.find(member => member.id === id);

  if (!member) {
    return <div>Membro não encontrado.</div>;
  }
  return (
    <Wrapper>
      <Container>
        <Title
          sortTitle={"Portfólio"}
        />
        <ContainerCard>
          {member.projetos && member.projetos.length > 0 ? (
            member.projetos.map((projeto) => (
              <Card key={projeto.id}>

                <Img src={projeto.imageProject} alt={projeto.title} >
                <Content>
                  <Overlay />
                  <TitleProject>{projeto.title}</TitleProject>
                  <Texto>{projeto.description}</Texto>
                </Content>
                </Img>
              </Card>
            ))
          ) : (
            <div>Não há projetos para este membro.</div>
          )}
        </ContainerCard>
      </Container>
    </Wrapper>
  )
}

export default PortfólioTeam