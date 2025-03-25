import type { GlobalConfig } from 'payload'

/*
const data = {
  title: 'Nordic-Baltic Meeting 2025',
  date: 'May 8-9, 2025',
  location: 'Tallinn, Estonia',
  emailPlaceholder: 'example@nbm.eu',
  buttonText: 'Register Now',
}
*/

export const HeroSection: GlobalConfig = {
  slug: 'hero-section',

  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Nordic-Baltic Meeting 2025',
      required: true,
    },
    {
      name: 'date',
      type: 'text',
      defaultValue: 'May 8-9, 2025',
      required: true,
    },
    {
      name: 'location',
      type: 'text',
      defaultValue: 'Tallinn, Estonia',
      required: true,
    },
    {
      name: 'emailPlaceholder',
      type: 'text',
      defaultValue: 'example@nbm.eu',
      required: true,
    },
    {
      name: 'buttonText',
      type: 'text',
      defaultValue: 'Register Now',
      required: true,
    },
  ],
}
