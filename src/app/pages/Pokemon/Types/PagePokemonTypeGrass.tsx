import React from "react";
import MainNavigation from "../../../MainNavigation";
import "./PagePokemonTypes.scss";

const PagePokemonTypeGrass = () => {
  return (
    <div className="container">
      <MainNavigation />
      <div className="type-icon grass"></div>
      <h1>Grass Type</h1>
      <p>More details coming soon!</p>
    </div>
  );
};

export default PagePokemonTypeGrass;
