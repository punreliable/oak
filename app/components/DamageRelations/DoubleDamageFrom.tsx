import { DoubleDamageFromProps } from '@/types/DamageRelations';
import prettyName from '@/utilities/prettyName';

const DoubleDamageFrom = (double_damage_from: DoubleDamageFromProps[]) => {
  const doubleDamageFrom = double_damage_from;

  console.log('Double Damage From', double_damage_from);

  const listOfDoubleDamageFromTypes = doubleDamageFrom.map((x: any) => {
    <div key={x.double_damage_from.name} className='col-md-2'>
      <a className='btn btn-primary' href={`/type/${x.double_damage_from.name}`}>
        {prettyName(x.double_damage_from.name)}
      </a>
    </div>;
  });

  console.log('List of Double Damage from Types: ', listOfDoubleDamageFromTypes);

  return (
    <>
      <h3>Double Damage From</h3>
      {/* {listOfDoubleDamageFromTypes} */}
    </>
  );
};

export default DoubleDamageFrom;
