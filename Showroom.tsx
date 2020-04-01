import React from "react";
import Hero from "./Hero";
import { ShowroomQueryVariables, useShowroomQuery } from "./Showroom.graphql";

const Showroom: React.FC<ShowroomQueryVariables> = variables => {
  const data = useShowroomQuery({ variables });

  return (
    <>
      <Hero {...data} />
    </>
  );
};

export default Showroom;
