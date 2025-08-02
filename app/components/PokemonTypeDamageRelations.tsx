import { DoubleDamageFromProps } from '@/types/DamageRelations';
import DoubleDamageFrom from '@/app/components/DamageRelations/DoubleDamageFrom';
const PokemonTypeDamageRelations = (props: DoubleDamageFromProps) => {
  const doubleDamageFrom: DoubleDamageFromProps = props;
  return (
    <div className='row'>
      {doubleDamageFrom && (
        <div className='col-lg-4 col-md-12'>
          <DoubleDamageFrom double_damage_from={doubleDamageFrom.double_damage_from} />
        </div>
      )}
    </div>
  );
};

export default PokemonTypeDamageRelations;
