import React from "react";
import Hero from "./Hero";
import Gallery from "./Gallery";
import GoogleMaps from "./GoogleMaps";
import { ShowroomQueryVariables, useShowroomQuery } from "./Showroom.graphql";

const Showroom: React.FC<ShowroomQueryVariables> = variables => {
  const data = useShowroomQuery({ variables });

  return (
    <>
      <Hero {...data} />
      <Gallery {...data} />
      <GoogleMaps {...data.location} />
    </>
  );
};

export default Showroom;
