import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';
import Groq from 'groq-sdk';

export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const feelingType = formData.get('feelingType');
		const reason = formData.get('reason');

		if (!feelingType || !reason) {
			return redirect(302, '/');
		}

		console.log(feelingType, reason);

		// // TODO: call the API here
		// const openai = new OpenAI({
		// 	apiKey: ''
		// });

		// const response = await openai.chat.completions.create({
		// 	model: 'gpt-4-turbo',
		// 	messages: [
		// 		{
		// 			role: 'system',
		// 			content:
		// 				'You are an expert in reading the emotional state of the user based on their energy levels and what’s causing them. Your task is to provide 6 potential feelings that user could be going through.\n\nOnly output in JSON as an array. Do not output any other text or symbols.\n\n[\n    "feeling 1",\n    "feeling 2",\n]'
		// 		},
		// 		{
		// 			role: 'user',
		// 			content:
		// 				'{\n    "energy_level": "High energy, unpleasant",\n    "cause": "VC passed on me yesterday"\n}'
		// 		},
		// 		{
		// 			role: 'assistant',
		// 			content:
		// 				'[\n    "frustration",\n    "anger",\n    "disappointment",\n    "determination",\n    "stress",\n    "anxiety"\n]'
		// 		}
		// 	],
		// 	temperature: 1,
		// 	max_tokens: 4095,
		// 	top_p: 1,
		// 	frequency_penalty: 0,
		// 	presence_penalty: 0
		// });

		// console.log('got response');
		// console.log(response.choices[0].message.content!);

		// const potentialFeelings = JSON.parse(response.choices[0].message.content!);

		return {
			status: 200
			// body: {
			// 	potentialFeelings
			// }
		};
	}
} satisfies Actions;
