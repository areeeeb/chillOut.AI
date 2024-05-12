import { writable } from 'svelte/store';

function createUserFeelingsStore() {
	const { subscribe, update, set } = writable<UserFeelings>({
		feelingType: undefined,
		reason: undefined,
		feelingTypeDetailed: undefined,
		potentialFeelings: undefined,
		themeForTheDay: undefined,
		tasksToDo: undefined,
		tasksToPostpone: undefined
	});

	const setFeelingType = (feelingType: FeelingType) => {
		update((userFeelings) => ({ ...userFeelings, feelingType }));
	};

	const setReason = (reason: string) => {
		update((userFeelings) => ({ ...userFeelings, reason }));
	};

	const setFeelingTypeDetailed = (feelingTypeDetailed: string) => {
		update((userFeelings) => ({ ...userFeelings, feelingTypeDetailed }));
	};

	const setPotentialFeelings = (potentialFeelings: string[]) => {
		update((userFeelings) => ({ ...userFeelings, potentialFeelings }));
	};

	const setThemeForTheDay = (themeForTheDay: string) => {
		update((userFeelings) => ({ ...userFeelings, themeForTheDay }));
	};

	const setTasksToDo = (tasksToDo: string[]) => {
		update((userFeelings) => ({ ...userFeelings, tasksToDo }));
	};

	const setTasksToPostpone = (tasksToPostpone: string[]) => {
		update((userFeelings) => ({ ...userFeelings, tasksToPostpone }));
	};

	return {
		set,
		update,
		subscribe,
		setFeelingType,
		setReason,
		setFeelingTypeDetailed,
		setPotentialFeelings,
		setThemeForTheDay,
		setTasksToDo,
		setTasksToPostpone
	};
}

export const userFeelingsStore = createUserFeelingsStore();
