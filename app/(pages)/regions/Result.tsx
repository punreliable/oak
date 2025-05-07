import React from 'react';
import prettyName from '../../../utilities/prettyName';

const Result = (props: any) => {

const count: number = props.regions.count;

console.log('Count: ', count);
console.log('First Region: ', props.regions.results[0].name);
  return (
    <div className='App'>
      <h1>Regions</h1>
      <div className='row rowStats'>
        <div className='col-md-12 col-lg- stats'>
          {props.region && props.region.results.map((region: any, index: number) => (
          <div key={index}>
            <p>{prettyName(props.regions.results[index].name)}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Result;
