const softwareList = [
  {
    name: 'Meta-storyboard (MSB)',
    image: '/msb.png',
    description:
      'A JavaScript/TypeScript library for building scalable interactive, animated data stories with the meta-storyboard (MSB) and feature-action design pattern.',
    npm: 'https://www.npmjs.com/package/meta-storyboard',
    github: 'https://github.com/saifulkhan/meta-storyboard',
    funding: 'EPSRC',
  },
  {
    name: 'Rapid Assistance in Modelling the Pandemic (RAMP)',
    image: '/rampvis.png',
    description:
      'Software infrastructure for Visualization and Visual Analytics in Support of Rapid Assistance in Modelling the Pandemic (RAMPVIS). ',
    descriptionBlue:
      'Received a RAMP Early Career Investigator Award from the Royal Society for my contributions to the RAMP programme. ',
    github: [
      {
        url: 'https://github.com/ScottishCovidResponse/rampvis-ui',
        label: 'UI',
      },
      {
        url: 'https://github.com/ScottishCovidResponse/rampvis-api',
        label: 'Server',
      },
      {
        url: 'https://github.com/saifulkhan/rampvis-ontology-management-ui',
        label: 'UI',
      },
    ],
    external: 'https://sites.google.com/view/rampvis/',
    funding: 'EPSRC',
  },
  {
    name: 'Visual Bulletin Analytics System (VBAS)',
    image: '/vbas.png',
    description: [
      'Software infrastructure for seiesmological data analysis. Developed in collaboration with University of Oxford and ',
      {
        link: 'https://www.isc.ac.uk/',
        text: 'International Seismological Centre',
      },
    ],
    github: 'https://github.com/saifulkhan/isc_vbas',
    funding: 'Innovate UK',
  },
  {
    name: 'Visualisation Assisted Enterprose Search Engine',
    image: '/ese.png',
    description: [
      'A prototype enterprise search infrastructure developed as part of my DPhil research',
    ],
    descriptionGrey: [
      'DPhil (PhD) project at University of Oxford was funded by ',
      { link: 'https://www.laingorourke.com/', text: "Laing O'Rourke" },
    ],
    github: [
      {
        url: 'https://github.com/saifulkhan/dphil_project_search_interface',
        label: 'API',
      },
      {
        url: 'https://github.com/saifulkhan/dphil_project_search_interface',
        label: 'UI',
      },
    ],
    funding: "Laing O'Rourke",
  },
];

export default softwareList;
