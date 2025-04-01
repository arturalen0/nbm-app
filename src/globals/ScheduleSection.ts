import type { GlobalConfig } from 'payload'

/*
const data: ScheduleData = {
  title: 'Tentative Schedule',
  days: [
    {
      date: 'May 8, 2025',
      events: [
        { time: '12:30 - 13:00', title: 'Networking & Coffee' },
        { time: '13:00 - 13:30', title: 'Welcome & Opening Remarks' },
        { time: '13:30 - 14:30', title: 'Academic Career Organization' },
        { time: '14:30 - 16:15', title: 'Presentations & Discussions' },
        { time: '18:30 - 21:00', title: 'Dinner at Peppersack' },
      ],
    },
    {
      date: 'May 9, 2025',
      events: [
        { time: '09:30 - 10:00', title: 'Morning Coffee' },
        { time: '10:00 - 10:50', title: 'Academic Career Panel' },
        { time: '11:05 - 13:00', title: 'Ethics & AI Discussions' },
        { time: '13:00 - 14:00', title: 'Lunch Break' },
        { time: '14:00 - 15:30', title: 'Closing Session' },
      ],
    },
  ],
}
*/

export const ScheduleSection: GlobalConfig = {
  slug: 'schedule-section',

  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Tentative Schedule',
      required: true,
    },
    {
      name: 'days',
      type: 'array',
      defaultValue: [
        {
          date: 'May 8, 2025',
          events: [
            { time: '12:30 - 13:00', title: 'Networking & Coffee' },
            { time: '13:00 - 13:30', title: 'Welcome & Opening Remarks' },
            { time: '13:30 - 14:30', title: 'Academic Career Organization' },
            { time: '14:30 - 16:15', title: 'Presentations & Discussions' },
            { time: '18:30 - 21:00', title: 'Dinner at Peppersack' },
          ],
        },
        {
          date: 'May 9, 2025',
          events: [
            { time: '09:30 - 10:00', title: 'Morning Coffee' },
            { time: '10:00 - 10:50', title: 'Academic Career Panel' },
            { time: '11:05 - 13:00', title: 'Ethics & AI Discussions' },
            { time: '13:00 - 14:00', title: 'Lunch Break' },
            { time: '14:00 - 15:30', title: 'Closing Session' },
          ],
        },
      ],
      fields: [
        {
          name: 'date',
          type: 'text',
          required: true,
        },
        {
          name: 'events',
          label: 'Events for this Day',
          type: 'array',
          required: true,
          minRows: 1,
          fields: [
            {
              name: 'time',
              type: 'text',
              required: true,
              admin: {
                width: '30%', // Adjust admin UI layout
              },
            },
            {
              name: 'title',
              type: 'text',
              required: true,
              admin: {
                width: '70%', // Adjust admin UI layout
              },
            },
            // --- Start: New Optional Bullet Points Field ---
            {
              name: 'details', // Changed name to 'details' - more general
              label: 'Optional Details / Bullet Points',
              type: 'array',
              // No 'required: true' here, making the whole list optional
              fields: [
                {
                  name: 'point',
                  label: 'Bullet Point',
                  type: 'text',
                  required: true, // Each individual point needs text
                },
              ],
              admin: {
                // Optional: Add description for CMS user
                description:
                  'Add bullet points or details for this event item. Leave empty if not needed.',
              },
            },
            // --- End: New Optional Bullet Points Field ---
          ],
        },
      ],
    },
  ],
}
