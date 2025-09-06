export interface ContestCombos {
	normal: {
		use_after: any; // Could be null or a Move object
		use_before:
			| {
					name: string;
					url: string;
			  }[]
			| null;
	};
	super: {
		use_after: any; // Could be null or a Move object
		use_before: any; // Could be null or a Move object
	};
}

export interface EffectChange {
	version_group: {
		name: string;
		url: string;
	};
	effect_entries: {
		effect: string;
		language: {
			name: string;
			url: string;
		};
	}[];
}

export interface FlavorTextEntry {
	flavor_text: string;
	language: {
		name: string;
		url: string;
	};
	version_group: {
		name: string;
		url: string;
	};
}

export interface Move {
	accuracy: number;
	contest_combos: ContestCombos;
	contest_effect: {
		url: string;
	};
	contest_type: {
		name: string;
		url: string;
	};
	damage_class: {
		name: string;
		url: string;
	};
	effect_chance: any; // Could be null or a number
	effect_changes: EffectChange[];
	effect_entries: {
		effect: string;
		language: {
			name: string;
			url: string;
		};
		short_effect: string;
	}[];
	flavor_text_entries: FlavorTextEntry[];
	generation: {
		name: string;
		url: string;
	};
	id: number;
	learned_by_pokemon: {
		name: string;
		url: string;
	}[];
	machines: any[]; // You might want to define a more specific type for this if you know its structure
	meta: {
		ailment: {
			name: string;
			url: string;
		};
		ailment_chance: number;
		category: {
			name: string;
			url: string;
		};
		crit_rate: number;
		drain: number;
		flinch_chance: number;
		healing: number;
		max_hits: any; // Could be null or a number
		max_turns: any; // Could be null or a number
		min_hits: any; // Could be null or a number
		min_turns: any; // Could be null or a number
		stat_chance: number;
	};
	name: string;
	names: {
		language: {
			name: string;
			url: string;
		};
		name: string;
	}[];
	past_values: any[]; // You might want to define a more specific type if you know its structure
	power: number;
	pp: number;
	priority: number;
	stat_changes: any[]; // You might want to define a more specific type if you know its structure
	super_contest_effect: {
		url: string;
	};
	target: {
		name: string;
		url: string;
	};
	type: {
		name: string;
		url: string;
	};
}
