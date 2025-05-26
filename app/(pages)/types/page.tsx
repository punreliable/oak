import './PokemonTypesPage.scss';
import Link from 'next/link';
import CardPokemonType from './CardPokemonType';
import type PokemonType from '@/app/types/PokemonType.d.ts';

const PagePokemonTypeList = () => {

  return (
  
    <main className="nes-container gameboy gameboy-screen pb-4 my-2">
      
      <div className="row pb-4">
        
        <div className="jumbotron gameboy col-lg-12 pb-4">
          
          <h1 className="h1-responsive text-center gameboy">Pokémon Types</h1>

          <h2 className="h3-responsive text-center gameboy">
            Learn all of their&nbsp;advantages, and&nbsp;disadvantages.
          </h2>

      </div>

    </div>

    <div className="row pb-4">

      <div className="col-lg-4 col-sm-6">

        <CardPokemonType type={
          {
          'name': 'Normal',
          'link': '/type/normal',
          'container': 'type-normal-container'
          }
        } />

      </div>

      <div className="col-lg-4 col-sm-6">

        <CardPokemonType type={
          {
          'name': 'Fighting',
          'link': '/type/fighting',
          'container': 'type-fighting-container'
          }
        } />

      </div>

      <div className="col-lg-4 col-sm-6">

        <CardPokemonType type={
          {
          'name': 'Flying',
          'link': '/type/flying',
          'container': 'type-flying-container'
          }
        } />

      </div>

      <div className="col-lg-4 col-sm-6">

        <CardPokemonType type={
          {
          'name': 'Poison',
          'link': '/type/poison',
          'container': 'type-poison-container'
          }
        } />
        
      </div>

		<div className="col-lg-4 col-sm-6">

      <CardPokemonType type={
            {
            'name': 'Ground',
            'link': '/type/ground',
            'container': 'type-ground-container'
            }
          } />
    </div>

		<div className="col-lg-4 col-sm-6">

      <CardPokemonType type={
            {
            'name': 'Rock',
            'link': '/type/rock',
            'container': 'type-rock-container'
            }
          } />

    </div>


		<div className="col-lg-4 col-sm-6">

      <CardPokemonType type={
            {
            'name': 'Bug',
            'link': '/type/bug',
            'container': 'type-bug-container'
            }
          } />

    </div>

    <div className="col-lg-4 col-sm-6">

<CardPokemonType type={
      {
      'name': 'Ghost',
      'link': '/type/ghost',
      'container': 'type-ghost-container'
      }
    } />

</div>


<div className="col-lg-4 col-sm-6">

<CardPokemonType type={
      {
      'name': 'Steel',
      'link': '/type/steel',
      'container': 'type-steel-container'
      }
    } />

</div>


<div className="col-lg-4 col-sm-6">

<CardPokemonType type={
      {
      'name': 'Fire',
      'link': '/type/fire',
      'container': 'type-fire-container'
      }
    } />

</div>

<div className="col-lg-4 col-sm-6">

<CardPokemonType type={
      {
      'name': 'Water',
      'link': '/type/water',
      'container': 'type-water-container'
      }
    } />


</div>

<div className="col-lg-4 col-sm-6">

<CardPokemonType type={
      {
      'name': 'Grass',
      'link': '/type/grass',
      'container': 'type-grass-container'
      }
    } />


</div>

<div className="col-lg-4 col-sm-6">

<CardPokemonType type={
      {
      'name': 'Electric',
      'link': '/type/electric',
      'container': 'type-electric-container'
      }
    } />


</div>

<div className="col-lg-4 col-sm-6">

<CardPokemonType type={
      {
      'name': 'Psychic',
      'link': '/type/psychic',
      'container': 'type-psychic-container'
      }
    } />


  </div>


    <div className="col-lg-4 col-sm-6">

      <CardPokemonType type={
            {
            'name': 'Ice',
            'link': '/type/ice',
            'container': 'type-ice-container'
            }
          } />
          
    </div>

		<div className="col-lg-4 col-sm-6">
			
      <CardPokemonType type={
          {
          'name': 'Dragon',
          'link': '/type/dragon',
          'container': 'type-dragon-container'
          }
        } />

    </div>

		<div className="col-lg-4 col-sm-6">

      <CardPokemonType type={
        {
        'name': 'Dark',
        'link': '/type/dark',
        'container': 'type-dark-container'
        }
      } />

  </div>

		<div className="col-lg-4 col-sm-6">

      <CardPokemonType type={
        {
        'name': 'Fairy',
        'link': '/type/fairy',
        'container': 'type-fairy-container'
        }
      } />

    </div>


	</div>

      </main>

  
  );
};

export default PagePokemonTypeList;
