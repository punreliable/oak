// pokemon-type-double-damage-from.d.ts
export type PokemonTypeDoubleDamageFrom = {
  id: number;
  name: string;
  data: {
    id: number;
    name: string;
    damage_relations: [
      double_damage_from: {
        name: string;
        url: string;
      },
      double_damage_to: {
        name: string;
        url: string;
      },
      half_damage_from: {
        name: string;
        url: string;
      },
      half_damage_to: {
        name: string;
        url: string;
      },
      no_damage_from: {
        name: string;
        url: string;
      },
      no_damage_to: {
        name: string;
        url: string;
      },
    ];
  };
};
