import React from "react";
import { HeroFragment } from "./Hero.graphql";

const Hero: React.FC<HeroFragment> = ({ name, description }) => (
  <>
    <h1>{name}</h1>
    <h2>{description}</h2>
  </>
);

export default Hero;
