import React from 'react'
import { Card, CardImage, Container, Content, Header, Lore, Nome, Wrapper } from './style'
import { TeamList } from '../../../Utlits/TeamList'
import Title from '../../../Components/Shared/Title/Title'
import { useLocation } from 'react-router-dom'

const Details = () => {
    const location = useLocation();
    const { id } = location.state || {}; 

    const member = TeamList.find(member => member.id === id);

    if (!member) {
        return <div>Membro não encontrado.</div>;
    }
    return (
        <Wrapper>
            <Container>
                <Content>
                    <Nome>
                        {member.nome}
                    </Nome>
                    <Header>
                        {member.heading}
                    </Header>
                    <Lore>
                        {member.sobre}
                    </Lore>
                </Content>
                <Card>
                <CardImage src={member.image} alt={member.nome} />
                </Card>
            </Container>
        </Wrapper>
    )
}

export default Details