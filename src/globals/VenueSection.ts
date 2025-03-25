import type { GlobalConfig } from 'payload'

/*
const data = {
  title: 'Venue',
  venue: {
    name: 'Estonian Academy of Sciences',
    location: 'Historical Medieval Center of Tallinn',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.767346904255!2d24.7406482!3d59.436954699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469293628212fa11%3A0xaad7c16fc621eec9!2sEstonian%20Academy%20of%20Sciences!5e0!3m2!1sen!2see!4v1742242773897!5m2!1sen!2see',
  },
}
*/

export const VenueSection: GlobalConfig = {
  slug: 'venue-section',

  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Venue',
      required: true,
    },
    {
      name: 'venue',
      type: 'group',
      fields: [
        {
          name: 'name',
          type: 'text',
          defaultValue: 'Estonian Academy of Sciences',
          required: true,
        },
        {
          name: 'location',
          type: 'text',
          defaultValue: 'Historical Medieval Center of Tallinn',
          required: true,
        },
        {
          name: 'mapUrl',
          type: 'text',
          defaultValue:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.767346904255!2d24.7406482!3d59.436954699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469293628212fa11%3A0xaad7c16fc621eec9!2sEstonian%20Academy%20of%20Sciences!5e0!3m2!1sen!2see!4v1742242773897!5m2!1sen!2see',
          required: true,
        },
      ],
    },
  ],
}
