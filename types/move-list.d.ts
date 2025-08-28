export interface Move {
  name: string;
  url: string;
}

export interface VersionGroup {
  name: string;
  url: string;
}

export interface VersionGroupDetails {
  level_learned_at: number;
  move_learn_method: object;
  order: number | null;
  version_group: VersionGroup;
}

export interface Moves {
  move: Move[];
  version_group_details: VersionGroupDetails[];
}

export interface MoveList {
  moves: Moves[];
  from: string;
}
