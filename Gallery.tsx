import React from "react";
import { GalleryFragment } from "./Gallery.graphql";

const Gallery: React.FC<GalleryFragment> = ({ images }) =>
  images.map(image => <img src={image} />);

export default Gallery;
