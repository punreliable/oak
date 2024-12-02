// pokemon-type.d.ts
export type PokemonTypeFromAPI = {
  id: number;
  name: string;
  data: {
    map(
      arg0: (
        double_damage_from: any,
        index: number,
      ) => import("react").JSX.Element,
    ): import("react").ReactNode;
    id: number;
    name: string;
    damage_relations: {
      double_damage_from: [
        {
          name: string;
          url: string;
        },
      ];
      double_damage_to: {
        name: string;
        url: string;
      };
      half_damage_from: {
        name: string;
        url: string;
      };
      half_damage_to: {
        name: string;
        url: string;
      };
      no_damage_from: {
        name: string;
        url: string;
      };
      no_damage_to: {
        name: string;
        url: string;
      };
    };
  };
};
