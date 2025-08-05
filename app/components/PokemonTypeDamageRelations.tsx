import type { DamageRelationType, DamageRelationsType } from '@/types/PokemonTypeDamageRelations';
import { DoubleDamageFrom } from '@/app/components/DamageRelations/DoubleDamageFrom';
import { HalfDamageFrom } from '@/app/components/DamageRelations/HalfDamageFrom';
import { NoDamageFrom } from '@/app/components/DamageRelations/NoDamageFrom';
import { NoDamageTo } from '@/app/components/DamageRelations/NoDamageTo';
import { HalfDamageTo } from '@/app/components/DamageRelations/HalfDamageTo';
import { DoubleDamageTo } from '@/app/components/DamageRelations/DoubleDamageTo';

const PokemonTypeDamageRelations = (props: any) => {

  const doubleDamageFrom: any = props.damage_relations.double_damage_from;

  console.log(doubleDamageFrom);

  const halfDamageFrom: DamageRelationsType = props;
  const noDamageFrom: DamageRelationsType = props;
  const noDamageTo: DamageRelationsType = props;
  const halfDamageTo: DamageRelationsType = props;
  const doubleDamageTo: DamageRelationsType = props;

  // function getDamageRelation(data: any, relation:string) {
  //   if(relation == 'double_damage_from') {
  //     return data.damage_relations.double_damage_from;
  //   }
  // }
  const myData = props.damage_relations.double_damage_from[0].name; 
  // console.log(getDamageRelation(props, 'double_damage_from'));


  return (
    <>
      <div className='row py-4'>
        {doubleDamageFrom && (
          <div className='col'>
            <DoubleDamageFrom types={doubleDamageFrom} />
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
