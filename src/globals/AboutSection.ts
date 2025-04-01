import type { GlobalConfig } from 'payload'

/*
const data: {
    title: string
    subtitle: string
    dateLocation: string
    content: string[]
  } = {
    title: 'Join Us in Tallinn: Nordic-Baltic Young Academies Meeting 2025',

    subtitle:
      'The Estonian Young Academy of Sciences invites you to the annual Nordic-Baltic Young Academies Meeting (NBM) in Tallinn, Estonia',

    dateLocation:
      "May 8–9, 2025 held at the Estonian Academy of Sciences in Tallinn's medieval Old Town.",

    content: [
      `Since 2005, seven young academies have been established in the following countries: 
      Latvia (2005), Denmark (2011), Sweden (2011), Norway (2013), Estonia (2017), Finland (2017), 
      and Lithuania (2018).`,

      `The academies have rapidly established themselves as essential platforms for young researchers 
      in terms of collaboration and exchanging ideas across scientific and national borders. Furthermore, 
      the young academies have become well-respected and independent voices in policy and research 
      debates in their respective countries.`,

      `All academies either invite researchers or are open for applications from researchers from all 
      scientific disciplines, with scientific excellence as the main criterion for membership.`,

      `International collaboration between the young academies has been found to be an excellent way 
      to share ideas, knowledge, and experiences while inspiring individual academies' development. 
      The meeting in Tallinn will continue a series of events organized in different countries.`,

      `Nordic-Baltic meetings (NBMs) were organized in Copenhagen (2016), Oslo (2017), Stockholm (2018), 
      Helsinki (2022), Oslo (2023), and Copenhagen (2024). These NBMs have developed into an important 
      platform for the academies, and it was decided after the 2022 meeting in Helsinki to arrange NBMs 
      as recurring, annual events.`,

      `The 2025 NBM will further strengthen the bonds between our academies and consolidate the NBMs 
      as a stage for discussing common interests in research policies and related matters across the 
      Baltic Sea. It will also become an important initiative in further coordinating our participation 
      at other international meetings within Europe and globally, as well as an avenue for additional 
      cooperation with other European entities.`,
    ],
  }
*/

export const AboutSection: GlobalConfig = {
  slug: 'about-section',

  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Join Us in Tallinn: Nordic-Baltic Young Academies Meeting 2025',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      defaultValue:
        "The Estonian Young Academy of Sciences invites you to the annual Nordic-Baltic Young Academies Meeting (NBM) in Tallinn, Estonia May 8–9, 2025 held at the Estonian Academy of Sciences in Tallinn's medieval Old Town.",
      required: true,
    },
    {
      name: 'content',
      type: 'array',
      defaultValue: [
        {
          item: `Since 2005, seven young academies have been established in the following countries: 
      Latvia (2005), Denmark (2011), Sweden (2011), Norway (2013), Estonia (2017), Finland (2017), 
      and Lithuania (2018).`,
        },
        {
          item: `The academies have rapidly established themselves as essential platforms for young researchers 
      in terms of collaboration and exchanging ideas across scientific and national borders. Furthermore, 
      the young academies have become well-respected and independent voices in policy and research 
      debates in their respective countries.`,
        },
      ],
      fields: [
        {
          name: 'item',
          type: 'text',
        },
      ],
    },
  ],
}
