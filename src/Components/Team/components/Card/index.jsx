import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; 
import { TeamList } from "../../../../Utlits/TeamList";
import { Wrapper, CardContainer, CardImage, CardContent, Nome, Heading, Link, Overlay } from "./style";

const CardCarousel = () => {
    const [cardsDisplay, setCardsDisplay] = useState(1)
    const [windowWidth, setWindowWidth] = useState(window.outerWidth)

    useEffect(() => {
        if (window.outerWidth > 1500) {
            setCardsDisplay(3)
        } else if (window.outerWidth > 1000) {
            setCardsDisplay(2)
        } else {
            setCardsDisplay(1)
        }

        function handleResize() {
            if (window.outerWidth > 1500) {
                setCardsDisplay(3)
            } else if (window.outerWidth > 1000) {
                setCardsDisplay(2)
            } else {
                setCardsDisplay(1)
            }

            setWindowWidth(window.outerWidth)
        }

        window.addEventListener('resize', handleResize)

        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <Wrapper>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={cardsDisplay} 
                navigation
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false
                }}
            >
                {TeamList.map((member) => (
                    <SwiperSlide key={member.id}>
                        <CardContainer>
                            <CardImage src={member.image} alt={member.nome} />
                            <Overlay />
                            <CardContent>
                                <Nome>{member.nome}</Nome>
                                <Heading>{member.heading}</Heading>
                                <Heading>{member.email}</Heading>
                                <Link
                                    href={`https://${member.link}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {member.icon}
                                </Link>
                            </CardContent>
                        </CardContainer>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Wrapper>
    );
};

export default CardCarousel;
