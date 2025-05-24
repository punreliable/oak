import React from 'react';
import prettyName from '../../../utilities/prettyName';
import RegionsList from '@/app/components/RegionsList/RegionsList';
import { RegionsListProps } from '@/interfaces/regions';

const Result = (props: any) => {

const count: number = props.regions.count;

const ids: number[] = [];
for (let i = 0; i < props.regions.count; i++) {
  ids.push(props.regions.results[i].id);
}
const regions: {id:number, name: string }[] = [];
for (let i = 0; i < props.regions.count; i++) {
  regions.push({ id: props.regions.results[i].id, name: props.regions.results[i].name });
}

  return (
    <div className='App'>
      <h1>Regions</h1>
      <div className='row'>
        <div className='col-md-12 col-lg-12'>
          {regions && regions.map((region: any, index: number) => (
          <div key={index}>
            <h3 className="py-4">{prettyName(props.region.results[index].name)}</h3>
            <RegionsList regions={props.region.results[index].name} />
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Result;
