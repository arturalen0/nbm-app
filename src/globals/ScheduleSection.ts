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
          type: 'array',
          required: true,
          fields: [
            {
              name: 'time',
              type: 'text',
              required: true,
            },
            {
              name: 'title',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
