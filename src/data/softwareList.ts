const softwareList = [
  {
    name: 'Meta-storyboard (MSB)',
    image: '/msb.png',
    description: [
      {
        type: 'main',
        value:
          'Meta-storyboard is a JavaScript/TypeScript library for building interactive visualizations of dynamic data using the feature-action design pattern. It is designed to be scalable and supports a large-scale timeseries data from various data sources.',
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
          'A visualization and visual analytics infrastructure developed for supporting the modeling scientists and epedemiologists of the Scotish COVID Response Consortium (SCRC) during the COVID-19 pandemic.',
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
          'A software infrastructure for seismological data analysis and quality assurance that was developed and deployed at the International Seismological Centre (ISC), UK.',
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
          "A prototype enterprise search infrastructure for Laing O'Rourke that combines information retrieval and visual analytics techniques to support search and exploration of large collections of documents and data.",
        color: 'default',
      },
      {
        type: 'main',
        value:
          "DPhil (PhD) project at University of Oxford was funded by Laing O'Rourke (https://www.laingorourke.com/)",
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
