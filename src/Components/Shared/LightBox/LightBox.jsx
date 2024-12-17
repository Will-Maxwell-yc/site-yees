import React, { useState } from "react";
import { XLg, ChevronRight, ChevronLeft } from "react-bootstrap-icons";
import { Button, CloseButton, ImageContainer, ImageCount, LightboxBtns, LightboxWrapper, LigthboxContent, Icon, Img } from "./style";
const Lightbox = ({ images, setLightboxOpen, currentId }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(currentId);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  return (
    <LightboxWrapper>
      <LigthboxContent>
        <CloseButton onClick={closeLightbox}>
          <i>
            <XLg />
          </i>
        </CloseButton>
        <ImageContainer>
          <Img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
          />
        </ImageContainer>
        <ImageCount>
          {currentImageIndex + 1} / {images.length}
        </ImageCount>
      </LigthboxContent>
      <LightboxBtns>
        <Button onClick={prevImage}>
          <Icon>
            <ChevronLeft/>
          </Icon>
        </Button>
        <Button onClick={nextImage}>
          <Icon>
            <ChevronRight />
          </Icon>
        </Button>
      </LightboxBtns>
    </LightboxWrapper>
  );
};

export default Lightbox;
