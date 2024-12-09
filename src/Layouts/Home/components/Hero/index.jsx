import { } from 'react'

import { Wrapper, Background, Content, Overlay  } from './style'

const Hero = () => {

    return (
        <Wrapper>
            <Background autoPlay loop muted>
                <source src="../../../../src/assets/img/banner/hero.mp4" type="video/mp4" />
            </Background>
            <Overlay />
            <Content>
                <h1>Inovação que conecta ideias e transforma o mundo digital.</h1>
                <p>Software + Design + Marketing</p>
            </Content>
        </Wrapper>
    );
};

export default Hero;
