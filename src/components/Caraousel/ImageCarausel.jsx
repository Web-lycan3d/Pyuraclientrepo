/** @format */

import React from "react";
import "./carausel.styles.scss";

import ImageGallery from "react-image-gallery";
const ImageCarausel = () => {
  const images = [
    {
      original: "https://i.ibb.co/8mktTPb/p1.webp",
      thumbnail: "https://i.ibb.co/8mktTPb/p1.webp",
    },
    {
      original: "https://i.ibb.co/YyBKxTR/p2.webp",
      thumbnail: "https://i.ibb.co/YyBKxTR/p2.webp",
    },
    {
      original: "https://i.ibb.co/2dB9ytk/p3.webp",
      thumbnail: "https://i.ibb.co/2dB9ytk/p3.webp",
    },
    {
      original: "https://i.ibb.co/Rct4pzF/p5.webp",
      thumbnail: "https://i.ibb.co/Rct4pzF/p5.webp",
    },
    {
      original: "https://i.ibb.co/NWMJdKk/Pyura-renders-6.webp",
      thumbnail: "https://i.ibb.co/NWMJdKk/Pyura-renders-6.webp",
    },
  ];
  return (
    <div>
      <ImageGallery
        items={images}
        showNav={false}
        showPlayButton={false}
        showFullscreenButton={false}
      />
    </div>
  );
};

export default ImageCarausel;
