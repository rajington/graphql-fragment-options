import React from "react";
import Hero from "./Hero";
import GoogleMaps from "./GoogleMaps";
import { ShowroomQueryVariables, useShowroomQuery } from "./Showroom.graphql";

const Showroom: React.FC<ShowroomQueryVariables> = variables => {
  const data = useShowroomQuery({ variables });

  return (
    <>
      <Hero {...data} />
      <GoogleMaps {...data} />
    </>
  );
};

export default Showroom;
