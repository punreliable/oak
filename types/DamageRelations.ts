export interface DamageRelation {
  name: string;
  url: string;
}

export interface DoubleDamageFromProps {
  double_damage_from: DamageRelation[];
}

export interface DoubleDamageToProps {
  double_damage_to: DamageRelation[];
}
