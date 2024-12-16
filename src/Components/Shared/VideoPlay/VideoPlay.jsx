import React from "react";
import { XLg } from "react-bootstrap-icons";
import { Wrapper, LightboxContentVideo, CloseButton, Iframe } from "./style";

const VideoPlay = ({ setLightboxOpen, url }) => {
  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  return (
    <Wrapper>
      <LightboxContentVideo>
        <CloseButton onClick={closeLightbox}>
          <i>
            <XLg />
          </i>
        </CloseButton>
        <Iframe
          // width="420"
          // height="345"
          src={url}
        ></Iframe>
      </LightboxContentVideo>
    </Wrapper>
  );
};

export default VideoPlay;
