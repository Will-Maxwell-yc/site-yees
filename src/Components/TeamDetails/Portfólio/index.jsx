import React, { useState } from 'react'
import { Card, Container, ContainerCard, Img, Wrapper, TitleProject, Texto, Overlay, Content } from './style'
import Title from '../../Shared/Title/Title'
import { TeamList } from '../../../Utlits/TeamList';
import { useLocation } from 'react-router-dom';
import Lightbox from '../../Shared/LightBox/LightBox';

const PortfólioTeam = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentId, setCurrentId] = useState(0)
  const [projectImages, setProjectImages] = useState([])

  const openLightbox = (projetoId) => {
    const projeto = member.projetos.find((p) => p.id === projetoId);
    if (projeto && projeto.imgs) {
      setProjectImages(projeto.imgs);
      setCurrentId(0);
      setLightboxOpen(true);
    }
  };

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
          sortTitle={"Projetos"}
        />
        <ContainerCard>
          {member.projetos && member.projetos.length > 0 ? (
            member.projetos.map((projeto) => (
              <Card
                key={projeto.id}
                onClick={() => openLightbox(projeto.id)}
              >
                <Img src={projeto.imageProject} alt={projeto.title} >
                  <Content>
                    <TitleProject>{projeto.title}</TitleProject>
                    <Texto>{projeto.description}</Texto>
                    <Overlay />
                  </Content>
                </Img>
              </Card>
            ))
          ) : (
            <div>Não há projetos para este membro.</div>
          )}
        </ContainerCard>
      </Container>
      {lightboxOpen && (
        <Lightbox
          images={projectImages}
          setLightboxOpen={setLightboxOpen}
          currentId={currentId}
        />
      )}
    </Wrapper>
  )
}

export default PortfólioTeam