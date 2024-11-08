import ICAL from 'ical.js';
import type { EventProps } from '$lib/types.ts';

export const GET = async ({ url }) => {
	let events: EventProps[] = [];
	const params = new URLSearchParams(url.search);

	// fetch ical
	const icalUrl = 'https://calendar.google.com/calendar/ical/robotics%40utmsu.ca/public/basic.ics';

	const response = await fetch(icalUrl);
	const text = await response.text();

	// parse ical
	const jcalData = ICAL.parse(text);
	const comp = new ICAL.Component(jcalData);
	const vevents = comp.getAllSubcomponents('vevent');

	// parse vevents
	events = vevents.map((vevent) => {
		const event = new ICAL.Event(vevent);
		const startDate = event.startDate.toJSDate();

		return {
			name: event.summary,
			description: event.description,
			venue: event.location,
			date: startDate
		};
	});

	if (params.has('upcoming')) {
		const now = new Date();
		events = events.filter((event) => event.date > now);
	}

	return new Response(JSON.stringify({ events }));
};
