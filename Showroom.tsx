import React from "react";
import Hero from "./Hero";
import Gallery from "./Gallery";
import GoogleMaps from "./GoogleMaps";
import { ShowroomQueryVariables, useShowroomQuery } from "./Showroom.graphql";

const Showroom: React.FC<ShowroomQueryVariables> = ({ id }) => {
  const data = useShowroomQuery({ variables: { id } });

  return (
    <>
      <Hero id={id} />
      <Gallery id={id} />
      <GoogleMaps {...data.location} />
    </>
  );
};

export default Showroom;
