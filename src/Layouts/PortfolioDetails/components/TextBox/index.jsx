import React from 'react'
import { ChalengList, Container, DetailsSmall, Img, List, TextBoxHead, TextOne, TextTwo, Thumb, Wrapper } from './style'
import detailbg1 from "../../../../../src/assets/img/protfolio/prot-detials2.png";

const TextBox = () => {
    return (
        <Wrapper>
            <Container
                data-aos="fade-up"
                data-aos-duration="1400">
                <TextOne>
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don't look even
                    slightly believable. If you are going to use a passage of Lorem
                    Ipsum, you need to be sure there isn't anything embarrassing
                    hidden in the middle of text. All the Lorem Ipsum generators on
                    the Internet tend to repeat predefined chunks as necessary,
                    making this the first true generator on the Internet. It uses a
                    dictionary of over combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable.
                </TextOne>
                <TextTwo>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Neque quisquam est, qui dolorem ipsum
                    quia dolor sit amet, consectetur, adipisci velit, sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore magnam
                    aliquam voluptatem. Ut enim ad minima veniam, quis nostrum
                    exercitationem ullam corporis suscipit laboriosam,
                </TextTwo>
            </Container>
            <Container
                data-aos="fade-up"
                data-aos-duration="1400">
                <TextBoxHead>Challenge</TextBoxHead>
                <TextOne>
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don't look even
                    slightly believable. If you are going to use a passage of Lorem
                    Ipsum, you need to be sure there isn't anything embarrassing
                    hidden in the middle of text. All the Lorem Ipsum generators on
                    the Internet tend to repeat predefined chunks as necessary,
                    making this the first true generator on the Internet. It uses a
                    dictionary of over combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable.
                </TextOne>
                <ChalengList>
                    <List>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.
                    </List>
                    <List>
                        Nor again is there anyone who loves or pursues or desires to
                        obtain pain of itself, because it is pain, but because
                        occasionally
                    </List>
                    <List>
                        On the other hand, we denounce with righteous indignation and
                        dislike
                    </List>
                </ChalengList>
            </Container>
            <Container>
                <TextBoxHead>Solution & Result</TextBoxHead>
                <TextTwo>
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don't look even
                    slightly believable. If you are going to use a passage of Lorem
                    Ipsum, you need to be sure there isn't anything embarrassing
                    hidden in the middle of text. All the Lorem Ipsum generators on
                    the Internet tend to repeat predefined chunks as necessary,
                    making this the first true generator on the Internet. It uses a
                    dictionary of over Latin words, combined with a handful of model
                    sentence structures, to generate Lorem Ipsum which looks
                    reasonable. The generated Lorem Ipsum is therefore always free
                    from repetition, injected humour, or non-characteristic words
                    etc.
                </TextTwo>
            </Container>
            <DetailsSmall>
                <Thumb>
                    <Img src={detailbg1} alt="img" />
                </Thumb>
                <Thumb>
                    <Img src={detailbg1} alt="img" />
                </Thumb>
            </DetailsSmall>
        </Wrapper>
    )
}

export default TextBox