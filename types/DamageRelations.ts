export interface DamageRelation {
  name: string;
  url: string;
}

export interface DamageRelations {
  double_damage_from: DamageRelation[];
  double_damage_to: DamageRelation[];
}

export interface DoubleDamageFromProps {
  double_damage_from: DamageRelation[];
}

export interface DoubleDamageToProps {
  double_damage_to: DamageRelation[];
}
