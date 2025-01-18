// pokemon-ability-from-api.d.ts
export type PokemonAbilityFromAPI = {
  abilities: [
    {
      ability: {
        name: string;
        url: string;
      };

      is_hidden: boolean;
      slot: number;
    },
  ];
};
