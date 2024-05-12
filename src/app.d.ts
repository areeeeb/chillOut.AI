// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

// create feelingType enum, values are 'highEnergyPleasant', 'highEnergyUnpleasant', 'lowEnergyPleasant', 'lowEnergyUnpleasant'
type FeelingType =
	| 'highEnergyPleasant'
	| 'highEnergyUnpleasant'
	| 'lowEnergyPleasant'
	| 'lowEnergyUnpleasant';

interface UserFeelings {
	feelingType?: FeelingType;
	reason?: string;
	feelingTypeDetailed?: string;
	potentialFeelings?: string[];
	themeForTheDay?: string;
	tasksToDo?: string[];
	tasksToPostpone?: string[];
}

interface CalendarEvent {
	id: string;
	title: string;
	start_time: string;
	end_time: string;
	location: string;
	description: string;
}
