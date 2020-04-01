import React from "react";
import { useHeroFragment } from "./Hero.graphql";

const Hero: React.FC<{ id: string }> = id => {
  const data = useHeroFragment(id);

  return (
    <>
      <h1>{data.name}</h1>
      <h2>{data.description}</h2>
    </>
  );
};

export default Hero;
