import styles from "./SingleView.module.scss";

const SingleView = (props) => {
  const pokemon = [
    {
      id: "p0",
      name: "Pikachu",
      hp: 12,
      type: "",
      description: "",
      height: "",
      length: "",
      weakness: "",
      resistance: "",
      entryNumber: 25,
      baseXP: 0,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    },
  ];

  const name = pokemon.name;

  const entryNumber = pokemon.entryNumber;

  const image = pokemon.image;

  const hp = pokemon.hp;

  return (
    <div className="container card">
      <div className="row">
        <div className="offset-md-6 col-md-3 col-sm-6">
          <h2 className={styles.hp}>HP: {hp}</h2>
        </div>
        <div className="col-md-3 col-sm-6">
          <h2 className={styles.type}>Type</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h1 className={styles.name}>Pikachu</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <img
            src={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            }
            height="125"
            width="125"
            className={styles.image}
            alt={name}
            title={name}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h3 className={styles.description}>Description:</h3>
        </div>
        <div className="col-md-3 col-sm-12">
          <h3 className={styles.length}>Length</h3>
        </div>
        <div className="col-md-3 col-sm-6">
          <h3 className={styles.weight}>Weight</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <h4 className={styles.move}>Move 1 Name</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <h4 className={styles.move}>Move 2 Name</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <h4 className={styles.move}>Move 3 Name</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <h4 className={styles.move}>Move 4 Name</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <h5 className={styles.weakness}>Weakness</h5>
        </div>
        <div className="col-md-6 col-sm-6">
          <h5 className={styles.resistance}>Resistance</h5>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <h6 className={styles.summary}>Expanded Description</h6>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="offset-md-9 col-md-3">
          <h6 className={styles.entryNumber}>Entry #{entryNumber}</h6>
        </div>
      </div>
    </div>
  );
};

export default SingleView;
