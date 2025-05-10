const softwareList = [
  {
    name: 'Meta-StoryBoard (MSB)',
    image: '/msb.png',
    description: [
      {
        type: 'main',
        value:
          'Meta-storyboard is a JavaScript and TypeScript library designed for creating storytelling visualisations using the feature-action design pattern. It is scalable, supports large-scale dynamic timeseries data, and can be applied across various domains.',
        color: 'default',
      },
    ],
    links: [
      { type: 'npm', url: 'https://www.npmjs.com/package/meta-storyboard' },
      { type: 'github', url: 'https://github.com/saifulkhan/meta-storyboard' },
    ],
    funding: ['EPSRC', 'University of Oxford', 'STFC'],
  },
  {
    name: 'Rapid Assistance in Modelling the Pandemic Visualisation (RAMPVIS)',
    image: '/rampvis.png',
    description: [
      {
        type: 'main',
        value:
          'A visualisation and visual analytics infrastructure developed for supporting the modeling scientists and epedemiologists of the Scotish COVID Response Consortium (SCRC) during the COVID-19 pandemic.',
        color: 'default',
      },
      {
        type: 'main',
        value:
          'Received a RAMP Early Career Investigator Award from the Royal Society for my contributions to the RAMP programme.',
        color: 'blue',
      },
    ],
    links: [
      {
        type: 'github',
        url: 'https://github.com/ScottishCovidResponse/rampvis-ui',
        label: 'UI',
      },
      {
        type: 'github',
        url: 'https://github.com/ScottishCovidResponse/rampvis-api',
        label: 'Server',
      },
      {
        type: 'github',
        url: 'https://github.com/saifulkhan/rampvis-ontology-management-ui',
        label: 'UI',
      },
      { type: 'external', url: 'https://sites.google.com/view/rampvis/' },
    ],
    funding: ['EPSRC', 'University of Oxford'],
  },
  {
    name: 'Visual Bulletin Analytics System (VBAS)',
    image: '/vbas.png',
    description: [
      {
        type: 'main',
        value:
          'A software infrastructure for analysing and providing quality assurance of seismological data. This is an operational software infrastructure at the International Seismological Centre (www.isc.ac.uk) in the UK.',
        color: 'default',
      },
    ],
    links: [{ type: 'github', url: 'https://github.com/saifulkhan/isc_vbas' }],
    funding: [
      'Innovate UK',
      'University of Oxford',
      'International Seismological Centre',
    ],
  },
  {
    name: 'Visualisation Assisted Enterprose Search Engine',
    image: '/ese.png',
    description: [
      {
        type: 'main',
        value:
          "A prototype search infrastructure was developed for Laing O'Rourke, integrating information retrieval with visual analytics to enhance the search and reuse of extensive amount of building construction document and data.",
        color: 'default',
      },
      {
        type: 'main',
        value:
          "I received funding for my DPhil (PhD) project at the University of Oxford from Laing O'Rourke (www.laingorourke.com).",
        color: 'grey',
      },
    ],
    links: [
      {
        type: 'github',
        url: 'https://github.com/saifulkhan/dphil_project_search_interface',
        label: 'API',
      },
      {
        type: 'github',
        url: 'https://github.com/saifulkhan/dphil_project_search_interface',
        label: 'UI',
      },
    ],
    funding: ["Laing O'Rourke", 'University of Oxford'],
  },
];

export default softwareList;
