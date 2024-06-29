import MainNavigation from "./MainNavigation";
import "./PagePokemonTypeGhost.scss";

const PagePokemonTypeGhost = () => {
  return (
    <div className="container">
      <MainNavigation />
      <div className="type-icon ghost"></div>
      <h1>Ghost Type</h1>
      <p>More details coming soon!</p>
    </div>
  );
};

export default PagePokemonTypeGhost;
