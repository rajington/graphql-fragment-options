import React from "react";
import { filter } from "graphql-anywhere";
import Hero from "./Hero";
import HeroFragment from "./Hero.graphql";
import Gallery from "./Gallery";
import GalleryFragment from "./Gallery.graphql";
import GoogleMaps from "./GoogleMaps";
import GoogleMapsFragment from "./GoogleMaps.graphql";
import { ShowroomQueryVariables, useShowroomQuery } from "./Showroom.graphql";

const Showroom: React.FC<ShowroomQueryVariables> = variables => {
  const data = useShowroomQuery({ variables });

  return (
    <>
      <Hero {...filter(data, HeroFragment)} />
      <Gallery {...filter(data, GalleryFragment)} />
      <GoogleMaps {...filter(data.location, GoogleMapsFragment)} />
    </>
  );
};

export default Showroom;
