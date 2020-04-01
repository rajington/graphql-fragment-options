import React from "react";

const Hero: React.FC<{ name: string; description: string }> = ({
  name,
  description
}) => (
  <>
    <h1>{name}</h1>
    <h2>{description}</h2>
  </>
);

export default Hero;
