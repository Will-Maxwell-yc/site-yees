import React from 'react'
import { Button, Card, CardImage, Container, Content, Header, Link, Lore, Nome, SvgContainer, Wrapper } from './style'
import { TeamList } from '../../../Utlits/TeamList'
import Title from '../../../Components/Shared/Title/Title'
import { useLocation } from 'react-router-dom'
import { GoDownload } from 'react-icons/go'

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
                    <Button >
                        Download CV <GoDownload style={{ color:"#23c55e"}} />
                    </Button>
                    <Link>
                        {member.socialIcons.map((icon) => icon)}
                    </Link>
                </Content>
                <Card>
                <SvgContainer>
                        <svg viewBox="0 0 506 506">
                            <circle
                                cx="253"
                                cy="253"
                                r="250"
                                stroke="#23c55e"
                                strokeWidth="4"
                                strokeLinecap="round"
                                fill="none"
                            />
                        </svg>
                <CardImage src={member.image} alt={member.nome} />
                </SvgContainer>
                </Card>
            </Container>
        </Wrapper>
    )
}

export default Details



