import React from "react";
import { ShowroomQueryVariables, useShowroomQuery } from "./Showroom.graphql";

const Showroom: React.FC<ShowroomQueryVariables> = variables => {
  const data = useShowroomQuery({ variables });

  return (
    <>
      <h1>{data.name}</h1>
      <h2>{data.description}</h2>
    </>
  );
};

export default Showroom;
