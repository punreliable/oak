export interface NamedAPIResource {
	name: string;
	url: string;
}

export interface NamedAPIResourceList {
	count: number;
	next: string;
	previous: string;
	results: NamedAPIResource[];
}
