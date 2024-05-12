import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const feelingType = formData.get('feelingType');
		const reason = formData.get('reason');
		const feelingTypeDetailed = formData.get('feelingTypeDetailed');

		if (!feelingType || !reason || !feelingTypeDetailed) {
			return redirect(302, '/');
		}

		console.log(feelingType, reason, feelingTypeDetailed);

		// TODO: call the API here

		return {
			status: 200
			// TODO: this will be the data from API call
			// body: {}
		};
	}
} satisfies Actions;
