import { Wrapper, Background, Content, Overlay, WelcomeText } from './style';

const Hero = () => {
    return (
        <Wrapper>
            <Background autoPlay loop muted>
                <source src="../../../../src/assets/img/banner/hero.mp4" type="video/mp4" />
            </Background>
            <Overlay />
            <Content>
                <h1>Inovação que conecta ideias e transforma o mundo digital.</h1>
                <p>Software <span>+</span> Design <span>+</span> Marketing</p>
            </Content>
            <WelcomeText>
                <span>Seja Bem-vindo! Explore nosso site</span>
                <div className="arrow">↓</div>
            </WelcomeText>
        </Wrapper>
    );
};

export default Hero;
