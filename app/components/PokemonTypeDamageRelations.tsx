const PokemonTypeDamageRelations = (props: any) => {
  const doubleDamageFrom: any = props.damageRelations?.double_damage_from;
  const listOfDoubleDamageFrom = doubleDamageFrom.map(buildList(doubleDamageFrom));

  function buildList(x: any) {
    return <a href={`/type/${x.name}`}>${x.name}</a>;
  }

  return (
    <div className='row'>
      {doubleDamageFrom && (
        <div className='col-lg-4 col-md-12'>
          {doubleDamageFrom.damageRelations && listOfDoubleDamageFrom}
        </div>
      )}
    </div>
  );
};

export default PokemonTypeDamageRelations;
