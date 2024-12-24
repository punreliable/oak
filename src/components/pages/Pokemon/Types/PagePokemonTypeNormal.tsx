import MainNavigation from "../../../MainNavigation";
import "./PagePokemonTypes.scss";

const PagePokemonTypeNormal = () => {
  return (
    <div className="container">
      <MainNavigation />
      <div className="type-icon normal"></div>
      <h1>Normal Type</h1>
      <p>More details coming soon!</p>
    </div>
  );
};

export default PagePokemonTypeNormal;
