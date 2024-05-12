import { writable } from 'svelte/store';

const initialNotes: string[] = [
	'Finalize the new feature list for version 2.0, Prepare the monthly financial report, Schedule a team outing for next week',
	'Discussed potential partnership opportunities, They need a custom solution for their inventory management, Follow up next Tuesday',
	'Consider a soft launch with select customers, Organize a webinar to demo the product, Email blast a week before the full launch',
	'Positive feedback on the user interface, Several requests for additional features in the analytics dashboard, Issues with mobile responsiveness',
	'Coordinate with marketing for the new ad campaign, Review the latest development sprint, Schedule performance reviews for the team',
	'Look into leasing additional office space in the nearby tech park. Consider the budget impact and team needs. Schedule a visit next week.',
	'Upgrade project management tools, Ensure compatibility with existing systems, Train staff on new features',
	'Highlight recent growth metrics, Discuss Series A funding objectives, Prepare answers for potential risk questions',
	'Plan a team retreat for next month. Include outdoor activities and a workshop on team communication.',
	'Revise roadmap post-client feedback, Integrate new AI features planned for Q3, Prioritize user-requested features for development'
];

export const notesStore = writable<string[]>(initialNotes);
