import React from 'react';
import prettyName from '../../../utilities/prettyName';
import PokedexByRegion from "../../components/PokedexByRegion/PokedexByRegion";

const Result = (props: any) => {

const count: number = props.regions.count;

// for each region, I will need to create an array 9 ids. Then I will want to query an API for each of those ids
const ids: number[] = [];
for (let i = 0; i < props.regions.count; i++) {
  ids.push(props.regions.results[i].id);
}
// I will need to create a new array of objects with the id and name of each region
const regions: { id: number, name: string }[] = [];
for (let i = 0; i < props.regions.count; i++) {
  regions.push({ id: props.regions.results[i].id, name: props.regions.results[i].name });
}

// I will need to create a new array of objects with the id and name of each region

const regionNames: { id: number, name: string }[] = [];
for (let i = 0; i < props.regions.count; i++) {
  regionNames.push({ id: props.regions.results[i].id, name: prettyName(props.regions.results[i].name)});
}

console.log('Regions: ', regionNames);
console.log('Count: ', count);
console.log('First Region: ', props.regions.results[0].name);

  return (
    <div className='App'>
      <h1>Regions</h1>
      <div className='row rowStats'>
        <div className='col-md-12 col-lg- stats'>
          {regionNames && regionNames.map((region: any, index: number) => (
          <div key={index}>
            <h3 className="py-4">{prettyName(props.regions.results[index].name)}</h3>
            <PokedexByRegion regionId={props.regions.results[index].name} />
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Result;
