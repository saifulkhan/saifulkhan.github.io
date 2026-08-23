const softwareList = [
  {
    name: 'Meta-StoryBoard (MSB)',
    image: '/msb.mp4',
    description: [
      {
        type: 'main',
        value:
          'Meta-storyboard is a JavaScript and TypeScript library designed for creating storytelling visualisations using the feature-action design pattern. It is scalable, supports large-scale dynamic timeseries data, and can be applied across various domains.',
        color: 'default',
      },
      {
        type: 'credit',
        value: 'Video source: vis4pandemres.github.io',
        url: 'https://vis4pandemres.github.io/',
      },
    ],
    links: [
      { type: 'npm', url: 'https://www.npmjs.com/package/meta-storyboard' },
      { type: 'github', url: 'https://github.com/saifulkhan/meta-storyboard' },
    ],
    funding: ['EPSRC', 'University of Oxford', 'STFC'],
  },
  {
    name: 'Propagation',
    image: '/propagation.mp4',
    description: [
      {
        type: 'main',
        value:
          'Propagation is a novel approach for efficiently propagating visual designs across multiple plots and dashboards, enabling the reuse of visual designs for new datasets. It was developed during the RAMPVIS project (below).',
        color: 'default',
      },
    ],
    links: [
      {
        type: 'github',
        url: 'https://github.com/saifulkhan/rampvis-ontology-management-ui',
        label: 'UI',
      },
    ],
    funding: ['EPSRC', 'University of Oxford'],
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
        color: '#1976d2',
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
          'This project represents the fundamental evolution of data analysis at the International Seismological Centre (ISC) in the UK. The manual paper-based analysis workflow on the left illustrates the inefficient 30-year-old process, where analysts used barcode scanners, rulers, and pencils to manually review diverse seismic data across physical printouts and archived files. This has been replaced by the new VBAS (Visual Bulletin Analytics System), seen on the right. This interactive, unified software integrates all diverse seismological data types into a single interface. On a modern workstation, analysts can now digitally review hypocentres, magnitudes, phase arrivals, seismicity maps, and more. VBAS enables the team to detect patterns, identify anomalies, and perform operational quality assurance far more efficiently and accurately.',
        color: 'default',
      },
    ],
    links: [{ type: 'github', url: 'https://github.com/saifulkhan/isc_vbas' }],
    funding: ['Innovate UK', 'University of Oxford', 'International Seismological Centre'],
  },
  {
    name: 'Visualization Assisted Enterprise Search Engine',
    image: '/ese.png',
    description: [
      {
        type: 'main',
        value:
          "A prototype visualization assisted search engine was developed for Laing O'Rourke, an international engineering and construction company, holds a vast archive of project knowledge whose reuse and monetization depend on searching it quickly and reliably - beyond what standard enterprise search could provide. Developed a proof-of-concept visualization-assisted search engine to address this challenge: a focus+context visualization for rapid observation of false positives and false negatives in search results, a Search Provenance Graph with visual representations of search collaboration, and a special-purpose enterprise search engine with machine learning of ontologies to improve search precision and recall.",
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
