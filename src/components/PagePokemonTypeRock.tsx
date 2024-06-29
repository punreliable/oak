import MainNavigation from "./MainNavigation";
import "./PagePokemonTypeRock.scss";

const PagePokemonTypeRock = () => {
  return (
    <div className="container">
      <MainNavigation />
      <div className="type-icon rock"></div>
      <h1>Rock Type</h1>
      <p>More details coming soon!</p>
    </div>
  );
};

export default PagePokemonTypeRock;
