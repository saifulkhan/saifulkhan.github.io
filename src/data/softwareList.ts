const softwareList = [
  {
    name: 'Meta-storyboard (MSB)',
    image: '/msb.png',
    description: [
      { type: 'main', value: 'A JavaScript/TypeScript library for building scalable interactive, animated data stories with the meta-storyboard (MSB) and feature-action design pattern.', color: 'default' },
    ],
    links: [
      { type: 'npm', url: 'https://www.npmjs.com/package/meta-storyboard' },
      { type: 'github', url: 'https://github.com/saifulkhan/meta-storyboard' },
    ],
    funding: ['EPSRC', 'University of Oxford', 'STFC'],
  },
  {
    name: 'Rapid Assistance in Modelling the Pandemic (RAMP)',
    image: '/rampvis.png',
    description: [
      { type: 'main', value: 'Software infrastructure for Visualization and Visual Analytics in Support of Rapid Assistance in Modelling the Pandemic (RAMPVIS).', color: 'default' },
      { type: 'main', value: 'Received a RAMP Early Career Investigator Award from the Royal Society for my contributions to the RAMP programme.', color: 'blue' },
    ],
    links: [
      { type: 'github', url: 'https://github.com/ScottishCovidResponse/rampvis-ui', label: 'UI' },
      { type: 'github', url: 'https://github.com/ScottishCovidResponse/rampvis-api', label: 'Server' },
      { type: 'github', url: 'https://github.com/saifulkhan/rampvis-ontology-management-ui', label: 'UI' },
      { type: 'external', url: 'https://sites.google.com/view/rampvis/' },
    ],
    funding: ['EPSRC', 'University of Oxford'],
  },
  {
    name: 'Visual Bulletin Analytics System (VBAS)',
    image: '/vbas.png',
    description: [
      { type: 'main', value: 'Software infrastructure for seiesmological data analysis. Developed in collaboration with University of Oxford and International Seismological Centre (https://www.isc.ac.uk/)', color: 'default' },
    ],
    links: [
      { type: 'github', url: 'https://github.com/saifulkhan/isc_vbas' },
    ],
    funding: ['Innovate UK', 'University of Oxford', 'ISC'],
  },
  {
    name: 'Visualisation Assisted Enterprose Search Engine',
    image: '/ese.png',
    description: [
      { type: 'main', value: 'A prototype enterprise search infrastructure developed as part of my DPhil research', color: 'default' },
      { type: 'main', value: "DPhil (PhD) project at University of Oxford was funded by Laing O'Rourke (https://www.laingorourke.com/)", color: 'grey' },
    ],
    links: [
      { type: 'github', url: 'https://github.com/saifulkhan/dphil_project_search_interface', label: 'API' },
      { type: 'github', url: 'https://github.com/saifulkhan/dphil_project_search_interface', label: 'UI' },
    ],
    funding: ["Laing O'Rourke", 'University of Oxford'],
  },
];

export default softwareList;
