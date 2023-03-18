import styles from "./SingleView.module.scss";
import { useEffect, useState } from 'react';
import axios from 'axios';

const SingleView = (props) => {

  function capitalizeFirstLetter( string ) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const [pokemon, getPokemon] = useState(null);

  const number = props.entryNumber;
  const url = 'https://pokeapi.co/api/v2/pokemon';
  //onst requestURL = url + number.toString();

  const single = useEffect( () => {

    axios.get(`${url}/ditto`).then((response) => {

      getPokemon(response.data);
     // setName(response.data);
      // console.log(response.data);
    });
  }, []);



//   const [name, setName] = useState('');
//
//   const nameHandler = () => {
//     if(!response.data.name) return 'Not Found';
//     return response.data.name;
//   };



//   const singlePokemon = [
//     {
//       id: "p0",
//       name: "Pikachu",
//       hp: 12,
//       type: "",
//       description: "",
//       height: "",
//       length: "",
//       weakness: "",
//       resistance: "",
//       entryNumber: 25,
//       baseXP: 0,
//       image:
//         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
//     },
//   ];
//
//   const name = singlePokemon.name;
//   const entryNumber = singlePokemon.entryNumber;
//   const image = singlePokemon.image;
//   const hp = singlePokemon.hp;
//

  if(!pokemon) return "No Pokemon";

  const moves = pokemon.moves.filter(n => n > 0 );

  const types = pokemon.types;

  const moveList = moves.map( n => {
    <div className="row">
    <div className="col-md-12 col-sm-12">
      <h4 className={styles.move}>{n.name}</h4>
    </div>
  </div>
}
);

  /*
  const MovesList = moves.map( move => <div className="row"><div className="col-md-12 col-sm-12"><h4 className={styles.move}>{move.name}</h4></div></div> );
  */
  return (
    <div className="container card">
      <div className={styles.contents}>
      <div className="row">
        <div className="offset-md-6 col-md-3 col-sm-6">
          <h2 className={styles.hp}>HP:</h2>
        </div>
        <div className="col-md-3 col-sm-6">
          <h2 className={styles.type}>Type</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h1 className={styles.name}>{capitalizeFirstLetter(pokemon.name)}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <img
            src={pokemon.sprites.front_default}
            height="125"
            width="125"
            className={styles.image}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h3 className={styles.description}>Description: </h3>
        </div>
        <div className="col-md-3 col-sm-12">
          <h3 className={styles.length}>Length: {pokemon.height} </h3>
        </div>
        <div className="col-md-3 col-sm-6">
          <h3 className={styles.weight}>Weight: {pokemon.weight}</h3>
        </div>
      </div>




{ moveList }




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
          <h6 className={styles.entryNumber}>Entry # {pokemon.id}</h6>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SingleView;
