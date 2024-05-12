import { writable } from 'svelte/store';

const initialEvents: CalendarEvent[] = [
	{
		id: 'event1',
		title: 'Team Standup Meeting',
		start_time: '2024-05-15T09:00:00',
		end_time: '2024-05-15T09:30:00',
		location: 'Zoom',
		description: 'Daily standup with the core team to discuss the current tasks and blockers.'
	},
	{
		id: 'event2',
		title: 'Investor Pitch Rehearsal',
		start_time: '2024-05-15T11:00:00',
		end_time: '2024-05-15T12:00:00',
		location: 'Conference Room A',
		description:
			'Preparation session with the CFO to refine the pitch deck for upcoming VC meetings.'
	},
	{
		id: 'event3',
		title: '1:1 with Product Manager',
		start_time: '2024-05-15T14:00:00',
		end_time: '2024-05-15T14:30:00',
		location: "Founder's Office",
		description:
			'Weekly check-in to discuss product development progress and set priorities for the next release.'
	},
	{
		id: 'event4',
		title: 'Networking Event',
		start_time: '2024-05-16T18:00:00',
		end_time: '2024-05-16T20:00:00',
		location: 'Tech Hub Downtown',
		description:
			'Local startup networking event to connect with other founders and potential advisors.'
	},
	{
		id: 'event5',
		title: 'Client Demo Presentation',
		start_time: '2024-05-17T15:00:00',
		end_time: '2024-05-17T16:00:00',
		location: "Client's HQ",
		description: 'Showcase the latest version of our platform to key clients and gather feedback.'
	},
	{
		id: 'event6',
		title: 'User Experience Review',
		start_time: '2024-05-18T10:00:00',
		end_time: '2024-05-18T11:00:00',
		location: 'Office - UX Lab',
		description:
			'Review session with the UX team to go over the latest user feedback and discuss improvements.'
	},
	{
		id: 'event7',
		title: 'Tech Talk Webinar',
		start_time: '2024-05-18T13:00:00',
		end_time: '2024-05-18T14:30:00',
		location: 'Online - Webinar Platform',
		description:
			"Hosting a webinar on 'The Future of AI in E-commerce' to engage with the tech community and promote our solutions."
	},
	{
		id: 'event8',
		title: 'Legal Review for IP',
		start_time: '2024-05-19T15:00:00',
		end_time: '2024-05-19T16:00:00',
		location: 'Law Firm - Downtown',
		description:
			'Meeting with intellectual property lawyers to discuss the patent strategy for our newest algorithms.'
	},
	{
		id: 'event9',
		title: 'Budget Planning Session',
		start_time: '2024-05-20T09:30:00',
		end_time: '2024-05-20T11:00:00',
		location: 'Main Office - Conference Room B',
		description: 'Quarterly budget review and planning session with finance and department heads.'
	},
	{
		id: 'event10',
		title: 'Interview with Tech Journalist',
		start_time: '2024-05-20T14:00:00',
		end_time: '2024-05-20T15:00:00',
		location: 'Office - Meeting Room 3',
		description:
			'Interview with a prominent tech journalist to discuss our recent breakthroughs and future plans.'
	}
];

export const calendarEventsStore = writable<CalendarEvent[]>(initialEvents);
