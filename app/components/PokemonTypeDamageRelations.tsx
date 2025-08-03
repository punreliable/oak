import type { DamageRelationsType } from '@/types/PokemonTypeDamageRelations';
import { DoubleDamageFrom } from '@/app/components/DamageRelations/DoubleDamageFrom';
import { HalfDamageFrom } from '@/app/components/DamageRelations/HalfDamageFrom';
import { NoDamageFrom } from '@/app/components/DamageRelations/NoDamageFrom';
import { NoDamageTo } from '@/app/components/DamageRelations/NoDamageTo';
import { HalfDamageTo } from '@/app/components/DamageRelations/HalfDamageTo';
import { DoubleDamageTo } from '@/app/components/DamageRelations/DoubleDamageTo';

const PokemonTypeDamageRelations = (props: DamageRelationsType) => {
  const doubleDamageFrom: DamageRelationsType = props;
  const halfDamageFrom: DamageRelationsType = props;
  const noDamageFrom: DamageRelationsType = props;
  const noDamageTo: DamageRelationsType = props;
  const halfDamageTo: DamageRelationsType = props;
  const doubleDamageTo: DamageRelationsType = props;

  return (
    <>
      <div className='row py-4'>
        {doubleDamageFrom && (
          <div className='col'>
            <DoubleDamageFrom />
          </div>
        )}
        {halfDamageFrom && (
          <div className='col'>
            <HalfDamageFrom />
          </div>
        )}
        {noDamageFrom && (
          <div className='col'>
            <NoDamageFrom />
          </div>
        )}
      </div>
      <div className='row'>
        {noDamageTo && (
          <div className='col'>
            <NoDamageTo />
          </div>
        )}
        {halfDamageTo && (
          <div className='col'>
            <HalfDamageTo />
          </div>
        )}
        {doubleDamageTo && (
          <div className='col'>
            <DoubleDamageTo />
          </div>
        )}
      </div>
    </>
  );
};

export default PokemonTypeDamageRelations;
