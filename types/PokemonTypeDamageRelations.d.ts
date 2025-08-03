export interface DamageRelationType {
  name: string;
  url: string;
}

export interface DoubleDamageFromType {
  damage_relations: {
    double_damage_from: DamageRelationType[];
  };
}

export interface DoubleDamageToType {
  double_damage_to: DamageRelationType[];
}

export interface HalfDamageFromType {
  double_damage_from: DamageRelationType[];
}

export interface HalfDamageToType {
  double_damage_to: DamageRelationType[];
}

export interface NoDamageFromType {
  double_damage_from: DamageRelationType[];
}

export interface NoDamageToType {
  damage_relations: {
    double_damage_to: DamageRelationType[];
  };
}

export interface DamageRelationsType {
  damage_relations: {
    double_damage_from: [
      {
        name: string;
        url: string;
      },
    ];
    double_damage_to: [
      {
        name: string;
        url: string;
      },
    ];
    no_damage_to: [
      {
        name: string;
        url: string;
      },
    ];
    no_damage_from: [
      {
        name: string;
        url: string;
      },
    ];
    half_damage_from: [
      {
        name: string;
        url: string;
      },
    ];
    half_damage_to: [
      {
        name: string;
        url: string;
      },
    ];
  };
}
