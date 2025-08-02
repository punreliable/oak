import DoubleDamageFrom from '@/app/components/DamageRelations/DoubleDamageFrom';
const PokemonTypeDamageRelations = (props: any) => {
  const doubleDamageFrom: any = props.damageRelations?.double_damage_from;

  return (
    <div className='row'>
      {doubleDamageFrom && (
        <div className='col-lg-4 col-md-12'>
          {doubleDamageFrom.damageRelations && (
            <DoubleDamageFrom double_damage_from={doubleDamageFrom} />
          )}
        </div>
      )}
    </div>
  );
};

export default PokemonTypeDamageRelations;
