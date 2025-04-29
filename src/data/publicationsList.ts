export interface Venue {
  name: string;
  type: 'book' | 'conference' | 'journal' | 'workshop' | 'arxiv';
}

export interface Publication {
  title: string;
  authors: string;
  venue?: Venue;
  year: number;
  tags: string[];
  links?: { type: 'github' | 'npm' | 'external' | 'arxiv'; url: string }[];
}

export const publicationsList: Publication[] = [
  {
    title:
      'QCPINN: Quantum-Classical Physics-Informed Neural Networks for Solving PDEs',
    authors: 'A Farea, S Khan, MS Celebi',
    venue: { name: 'ArXiv', type: 'arxiv' },
    year: 2025,
    tags: ['Machine Learning'],
    links: [
      { type: 'arxiv', url: 'https://arxiv.org/abs/2503.16678' },
      { type: 'github', url: 'https://github.com/afrah/QCPINN' },
    ],
  },
  {
    title:
      'Feature-Action Design Patterns for Storytelling Visualizations with Time Series Data',
    authors:
      'S Khan, S Jones, B Bach, J Cha, M Chen, J Meikle, JC Roberts, ...',
    venue: { name: 'ArXiv', type: 'arxiv' },
    year: 2024,
    tags: ['Visualization'],
    links: [
      { type: 'arxiv', url: 'https://arxiv.org/abs/2402.03116' },
      { type: 'npm', url: 'https://www.npmjs.com/package/meta-storyboard' },
      { type: 'github', url: 'https://github.com/saifulkhan/meta-storyboard' },
    ],
  },
  {
    title: 'FAIR-MAST: A fusion device data management system',
    authors: 'S Jackson, S Khan, N Cummings, et al.',
    venue: { name: 'SoftwareX', type: 'journal' },
    year: 2024,
    tags: ['Software Infrastructure'],
    links: [],
  },
  {
    title:
      'Streaming Technologies and Serialization Protocols: Empirical Performance Analysis',
    authors: 'S Jackson, N Cummings, S Khan',
    venue: { name: 'IEEE Access', type: 'journal' },
    year: 2024,
    tags: ['Software Infrastructure'],
    links: [],
  },
  {
    title:
      'Creating storytelling visualizations for the Covid-19 pandemic using Feature-Action Design Patterns',
    authors:
      'PD Ritsos, S Khan, S Jones, B Bach, J Meikle, JC Roberts, J Wood, ...',
    venue: {
      name: 'IEEE VIS: Visualization & Visual Analytics Workshop',
      type: 'conference',
    },
    year: 2023,
    tags: ['Visualization'],
    links: [],
  },
  {
    title:
      'Web Performance Evaluation of High Volume Streaming Data Visualization',
    authors: 'S Khan, E Rydow, S Etemaditajbakhsh, K Adamek, W Armour',
    venue: { name: 'IEEE Access', type: 'journal' },
    year: 2023,
    tags: ['Software Infrastructure', 'Visualization'],
    links: [],
  },
  {
    title: 'Dashboard Design Patterns',
    authors:
      'B Bach, E Freeman, A Abdul-Rahman, C Turkay, S Khan, Y Fan, M Chen',
    venue: {
      name: 'IEEE Transactions on Visualization and Computer Graphics 29 (1), 342-352',
      type: 'journal',
    },
    year: 2023,
    tags: ['Visualization'],
    links: [],
  },
  {
    title:
      'Visualization for epidemiological modelling: challenges, solutions, reflections and recommendations',
    authors:
      'J Dykes, A Abdul-Rahman, D Archambault, B Bach, R Borgo, M Chen, ...',
    venue: {
      name: 'Philosophical Transactions of the Royal Society A',
      type: 'journal',
    },
    year: 2022,
    tags: ['Visualization'],
    links: [],
  },
  {
    title:
      'A system for organizing, collecting, and presenting open-source intelligence',
    authors: 'S Khan, D Wallom',
    venue: {
      name: 'Journal of Data, Information and Management',
      type: 'journal',
    },
    year: 2022,
    tags: ['Software Infrastructure'],
    links: [],
  },
  {
    title:
      'RAMPVIS: Answering the Challenges of Building Visualisation Capabilities for Large-scale Emergency Responses',
    authors: 'M Chen, A Abdul-Rahman, D Archambault, J Dykes, A Slingsby, ...',
    venue: { name: 'Epidemics', type: 'journal' },
    year: 2022,
    tags: ['Software Infrastructure', 'Visualization'],
    links: [],
  },
  {
    title:
      'Rapid development of a data visualization service in an emergency response',
    authors: 'S Khan, PH Nguyen, A Abdul-Rahman, E Freeman, C Turkay, M Chen',
    venue: {
      name: 'IEEE Transactions on Services Computing 15 (3), 1251-1264',
      type: 'journal',
    },
    year: 2022,
    tags: ['Visualization', 'Software Infrastructure'],
    links: [],
  },
  {
    title: 'Propagating Visual Designs to Numerous Plots and Dashboards',
    authors:
      'S Khan, PH Nguyen, A Abdul-Rahman, B Bach, M Chen, E Freeman, ...',
    venue: {
      name: 'IEEE Transactions on Visualization and Computer Graphics 28 (1), 86-95',
      type: 'journal',
    },
    year: 2021,
    tags: ['Visualization', 'Software Infrastructure'],
    links: [],
  },
  {
    title:
      'RAMPVIS: Towards a new methodology for developing visualisation capabilities for large-scale emergency responses',
    authors: 'M Chen, A Abdul-Rahman, D Archambault, J Dykes, A Slingsby, ...',
    venue: { name: 'arXiv', type: 'arxiv' },
    year: 2020,
    tags: ['Visualization', 'Software Infrastructure'],
    links: [{ type: 'arxiv', url: 'https://arxiv.org/abs/2012.04757' }],
  },
  {
    title:
      'Ontology-assisted provenance visualization for supporting enterprise search of engineering and business files',
    authors:
      'S Khan, U Kanturska, T Waters, J Eaton, R Bañares-Alcántara, M Chen',
    venue: {
      name: 'Advanced Engineering Informatics 30 (2), 244-257',
      type: 'journal',
    },
    year: 2016,
    tags: ['Visualization', 'Software Infrastructure'],
    links: [],
  },
  {
    title: 'Visualization Assisted Enterprise Search Engine',
    authors: 'S Khan',
    venue: { name: 'University of Oxford', type: 'book' },
    year: 2015,
    tags: ['DPhil Thesis', 'Visualization', 'Software Infrastructure'],
    links: [
      {
        type: 'external',
        url: 'https://ora.ox.ac.uk/objects/uuid:d1790b99-c30e-487b-b87e-98d4e3a8b2bb',
      },
    ],
  },
  {
    title: 'A Study on Glyph-based Visualisation with Dense Visual Context.',
    authors: 'S Khan, KJ Proctor, SJ Walton, R Bañares-Alcántara, M Chen',
    venue: { name: 'TPCG', type: 'conference' },
    year: 2014,
    tags: ['Visualization'],
    links: [],
  },
];
