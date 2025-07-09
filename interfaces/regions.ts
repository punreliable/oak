// Define the interfaces for the region data structure
export interface RegionLocation {
  name: string;
  url: string;
}

export interface RegionLanguage {
  name: string;
  url: string;
}

export interface RegionNameEntry {
  language: RegionLanguage;
  name: string;
}

export interface RegionPokedexEntry {
  name: string;
  url: string;
}

export interface RegionVersionGroup {
  name: string;
  url: string;
}

export interface Region {
  id: number;
  locations: RegionLocation[];
  main_generation: {
    name: string;
    url: string;
  };
  name: string;
  names: RegionNameEntry[];
  pokedexes: RegionPokedexEntry[];
  version_groups: RegionVersionGroup[];
}

// Props for the RegionsList component, expecting an array of Region objects
export interface RegionsListProps {
  regions: Region[];
}
