import type { DamageRelationsType } from '@/types/PokemonTypeDamageRelations';

export function DoubleDamageFrom(types) {
  const res: DamageRelationsType = types.damage_relations;
  console.log('Double Damage From: ', res);
  return (
    <div className='row'>
      <div className='col'>
        <h3>Double Damage From</h3>
      </div>
    </div>
  );
}
