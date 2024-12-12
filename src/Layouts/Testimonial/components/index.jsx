import React from "react";
import { StarFill } from "react-bootstrap-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import { TestimonialSection, TestimonialWrap, Quote, TestShape, TestSlide, SwiperPagination } from "./style";

import quote from "../../../assets/img/testimonial/quote.png";
import man1 from "../../../assets/img/testimonial/man1.png";
import man2 from "../../../assets/img/testimonial/man2.png";
import man3 from "../../../assets/img/testimonial/man3.png";
import testiArrow from "../../../assets/img/testimonial/testi-arrow.png";
import Partner from "../../../Components/Partner/Partner";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const reviewList = [
  {
    id: 1,
    name: "Shawn Beltran",
    position: "Business Owner",
    review: "There are many variations of passages of Lorem Ipsum available, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be hidden in middle of text. All the Lorem Ipsum generators,",
    image: man1,
    stars: Array(5).fill(<StarFill className="ratting fz-20" />),
  },
  {
    id: 2,
    name: "John Methcel",
    position: "Business Owner",
    review: "There are many variations of passages of Lorem Ipsum available, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be hidden in middle of text. All the Lorem Ipsum generators,",
    image: man2,
    stars: Array(5).fill(<StarFill className="ratting fz-20" />),
  },
  {
    id: 3,
    name: "Nethon Jr",
    position: "Business Owner",
    review: "There are many variations of passages of Lorem Ipsum available, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be hidden in middle of text. All the Lorem Ipsum generators,",
    image: man3,
    stars: Array(5).fill(<StarFill className="ratting fz-20" />),
  },
];

const Testimonial = () => (
  <TestimonialSection id="testimonial">
    <div className="container">
      <div className="project__head text-center">
        <span className="common__sub" data-aos="fade-up" data-aos-duration="1000">
          Testimonial
        </span>
        <h2 className="fw-500" data-aos="fade-down" data-aos-duration="1000">
          Happy Words From Happy
          <span className="d-block">Customer</span>
        </h2>
      </div>
      <TestimonialWrap data-aos="fade-up" data-aos-duration="1000">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          speed={1500}
          pagination={{
            clickable: true,
            el: ".swiper-pagination3",
          }}
          autoplay={{
            delay: 2000,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
        >
          {reviewList.map(({ id, name, position, review, image, stars }) => (
            <SwiperSlide key={id}>
              <TestSlide>
                <img src={image} alt={name} className="reviewer-img" />
                <div className="d-flex mb-40 align-items-center gap-2">
                  {stars.map((star, index) => (
                    <i key={index}>{star}</i>
                  ))}
                </div>
                <p>{review}</p>
                <h4 className="base mb-2">{name}</h4>
                <span className="fz-18 ptext">{position}</span>
              </TestSlide>
            </SwiperSlide>
          ))}
        </Swiper>
        <SwiperPagination className="swiper-pagination3" />
        <Quote>
          <img src={quote} alt="Quote" />
        </Quote>
        <TestShape>
          <img src={testiArrow} alt="Arrow" />
        </TestShape>
      </TestimonialWrap>
      <Partner />
    </div>
  </TestimonialSection>
);

export default Testimonial;
