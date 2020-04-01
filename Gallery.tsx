import React from "react";
import { useGalleryFragment } from "./Gallery.graphql";

const Gallery: React.FC<{ id: string }> = id => {
  const data = useGalleryFragment(id);

  return data.images.map(image => <img src={image} />);
};

export default Gallery;
