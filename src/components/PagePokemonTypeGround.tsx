import MainNavigation from "./MainNavigation";
import "./PagePokemonTypeGround.scss";

const PagePokemonTypeGround = () => {
  return (
    <div className="container">
      <MainNavigation />
      <div className="type-icon ground"></div>
      <h1>Ground Type</h1>
      <p>More details coming soon!</p>
    </div>
  );
};

export default PagePokemonTypeGround;
