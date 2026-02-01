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
  links?: {
    type: 'github' | 'npm' | 'external' | 'arxiv' | 'pdf';
    url: string;
  }[];
}

export const publicationsList: Publication[] = [
  {
    title: 'A Multiplexing Design Space: Theory, Method, and Application',
    authors: 'Y Xing, A Farea, S Khan, M Chen',
    venue: { name: 'under review', type: 'conference' },
    year: 2026,
    tags: ['Visualization', 'Machine Learning', 'Software Engineering'],
    links: [],
  },
  {
    title: 'Learning Fluid-Structure Interaction with Physics-Informed Machine Learning and Immersed Boundary Methods',
    authors: 'A Farea, S Khan, R Daryani, EC Ersan, MS Celebi',
    venue: { name: 'arxiv', type: 'arxiv' },
    year: 2026,
    tags: ['Machine Learning'],
    links: [{ type: 'pdf', url: 'https://www.arxiv.org/abs/2505.18565' }],
  },
  {
    title: 'Data Virtualization for Machine Learning',
    authors: 'S Khan, J Chakraborty, P Beaucamp, N Bhujel, M Chen',
    venue: { name: 'Int. Conf. on Services Computing (SCC 2025), Hong Kong', type: 'conference' },
    year: 2025,
    tags: ['Machine Learning', 'Software Engineering'],
    links: [{ type: 'pdf', url: 'https://www.arxiv.org/abs/2507.17293' }],
  },
  {
    title: 'QCPINN: Quantum-Classical Physics-Informed Neural Networks for Solving PDEs',
    authors: 'A Farea, S Khan, MS Celebi',
    venue: { name: 'Machine Learning: Science and Technology', type: 'journal' },
    year: 2025,
    tags: ['Machine Learning'],
    links: [
      { type: 'pdf', url: 'https://doi.org/10.1088/2632-2153/ae1c91' },
      { type: 'github', url: 'https://github.com/afrah/QCPINN' },
    ],
  },
  {
    title: 'Multi-Objective Loss Balancing in Physics-Informed Neural Networks for Fluid Flow Applications',
    authors: 'A Farea, S Khan, MS Celebi',
    venue: {
      name: '32nd IEEE Int. Conf. on High Performance Computing, Data, and Analytics (HiPC 2025), Hyderabad',
      type: 'arxiv',
    },
    year: 2025,
    tags: ['Machine Learning'],
    links: [{ type: 'pdf', url: 'https://arxiv.org/abs/2509.14437' }],
  },
  {
    title: 'An Open Data Service for Supporting Research in Machine Learning on Tokamak Data ',
    authors: 'S Jackson, S Khan, N Cummings, J Hodson, S Witt, S Pamela, R Akers, J Thiyagalingam, MAST Team',
    venue: { name: 'IEEE Transactions on Plasma Science', type: 'journal' },
    year: 2025,
    tags: ['Machine Learning', 'Software Engineering'],
    links: [
      { type: 'pdf', url: 'https://doi.org/10.1109/TPS.2025.3583419' },
      { type: 'github', url: 'https://github.com/ukaea/fair-mast' },
    ],
  },
  {
    title: 'Feature-Action Design Patterns for Storytelling Visualizations with Time Series Data',
    authors: 'S Khan, S Jones, B Bach, J Cha, M Chen, J Meikle, J C Roberts, J Thiyagalingam, J Wood, P D Ritsos',
    venue: { name: 'ArXiv', type: 'arxiv' },
    year: 2024,
    tags: ['Visualization', 'Software Engineering'],
    links: [
      { type: 'pdf', url: 'https://arxiv.org/abs/2402.03116' },
      { type: 'npm', url: 'https://www.npmjs.com/package/meta-storyboard' },
      { type: 'github', url: 'https://github.com/saifulkhan/meta-storyboard' },
    ],
  },
  {
    title: 'FAIR-MAST: A Fusion Device Data Management System',
    authors: 'S Jackson, S Khan, N Cummings, J Hodson, S de Witt, S Pamela, R Akers, J Thiyagalingam, MAST Team',
    venue: { name: 'SoftwareX', type: 'journal' },
    year: 2024,
    tags: ['Software Engineering'],
    links: [
      {
        type: 'github',
        url: 'https://github.com/ukaea/fair-mast',
      },
      {
        type: 'pdf',
        url: 'https://www.sciencedirect.com/science/article/pii/S2352711024002395',
      },
    ],
  },
  {
    title: 'Streaming Technologies and Serialization Protocols: Empirical Performance Analysis',
    authors: 'S Jackson, N Cummings, S Khan',
    venue: { name: 'IEEE Access', type: 'journal' },
    year: 2024,
    tags: ['Software Engineering'],
    links: [
      {
        type: 'pdf',
        url: 'https://ieeexplore.ieee.org/document/10734127',
      },
    ],
  },
  {
    title: 'Creating Storytelling Visualizations for the COVID-19 Pandemic Using Feature-Action Design Patterns',
    authors: 'PD Ritsos, S Khan, S Jones, B Bach, J Meikle, JC Roberts, J Wood, M Chen',
    venue: {
      name: 'IEEE VIS: Visualization and Visual Analytics Workshop',
      type: 'conference',
    },
    year: 2023,
    tags: ['Visualization'],
    links: [],
  },
  {
    title: 'Web Performance Evaluation of High Volume Streaming Data Visualization',
    authors: 'S Khan, E Rydow, S Etemaditajbakhsh, K Adamek, W Armour',
    venue: { name: 'IEEE Access', type: 'journal' },
    year: 2023,
    tags: ['Software Engineering', 'Visualization'],
    links: [
      {
        type: 'github',
        url: 'https://github.com/saifulkhan/streaming-vis-perf',
      },
      {
        type: 'pdf',
        url: 'https://ieeexplore.ieee.org/document/10044667',
      },
    ],
  },
  {
    title: 'Dashboard Design Patterns',
    authors: 'B Bach, E Freeman, A Abdul-Rahman, C Turkay, S Khan, Y Fan, M Chen',
    venue: {
      name: 'IEEE Transactions on Visualization and Computer Graphics',
      type: 'journal',
    },
    year: 2023,
    tags: ['Visualization'],
    links: [
      {
        type: 'external',
        url: 'https://dashboarddesignpatterns.github.io/',
      },
      {
        type: 'pdf',
        url: 'https://ieeexplore.ieee.org/document/9903550',
      },
    ],
  },
  {
    title: 'Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections and Recommendations',
    authors:
      'J Dykes, A Abdul-Rahman, D Archambault, B Bach, R Borgo, M Chen, J Enright, H Fang, EE Firat, E Freeman, T Gönen, C Harris, R Jianu, NW John, S Khan, A Lahiff, RS Laramee, L Matthews, S Mohr, PH Nguyen, AAM Rahat, R Reeve, PD Ritsos, JC Roberts, AS Slingsby, B Swallow, TT Torsney-Weir, C Turkay, R Turner, FP Vidal, Q Wang',
    venue: {
      name: 'Philosophical Transactions of the Royal Society A',
      type: 'journal',
    },
    year: 2022,
    tags: ['Visualization'],
    links: [
      {
        type: 'pdf',
        url: 'https://royalsocietypublishing.org/doi/10.1098/rsta.2021.0299',
      },
    ],
  },
  {
    title: 'A System for Organizing, Collecting, and Presenting Open-Source Intelligence',
    authors: 'S Khan, D Wallom',
    venue: {
      name: 'Journal of Data, Information and Management',
      type: 'journal',
    },
    year: 2022,
    tags: ['Software Engineering'],
    links: [
      {
        type: 'pdf',
        url: 'https://link.springer.com/article/10.1007/s42488-022-00068-4',
      },
    ],
  },
  {
    title:
      'RAMPVIS: Answering the Challenges of Building Visualisation Capabilities for Large-scale Emergency Responses',
    authors:
      'M Chen, A Abdul-Rahman, D Archambault, J Dykes, PD Ritsos, A Slingsby, TT Torsney-Weir, C Turkay, B Bach, R Borgo, A Brett, H Fang, R Jianu, S Khan, RS Laramee, L Matthews, PH Nguyen, R Reeve, JC Roberts, FP Vidal, Q Wang, J Wood, K Xu',
    venue: { name: 'Epidemics', type: 'journal' },
    year: 2022,
    tags: ['Software Engineering', 'Visualization'],
    links: [
      {
        type: 'pdf',
        url: 'https://www.sciencedirect.com/science/article/pii/S1755436522000226',
      },
    ],
  },
  {
    title: 'Rapid Development of a Data Visualization Service in an Emergency Response',
    authors: 'S Khan, PH Nguyen, A Abdul-Rahman, E Freeman, C Turkay, M Chen',
    venue: {
      name: 'IEEE Transactions on Services Computing',
      type: 'journal',
    },
    year: 2022,
    tags: ['Visualization', 'Software Engineering'],
    links: [
      {
        type: 'pdf',
        url: 'https://ieeexplore.ieee.org/document/9747990',
      },
    ],
  },
  {
    title: 'Propagating Visual Designs to Numerous Plots and Dashboards',
    authors: 'S Khan, PH Nguyen, A Abdul-Rahman, B Bach, M Chen, E Freeman, C Turkay',
    venue: {
      name: 'IEEE Transactions on Visualization and Computer Graphics',
      type: 'journal',
    },
    year: 2021,
    tags: ['Visualization', 'Software Engineering'],
    links: [
      {
        type: 'pdf',
        url: 'https://ieeexplore.ieee.org/document/9552200',
      },
      {
        type: 'github',
        url: 'https://github.com/saifulkhan/rampvis-ontology-management-ui',
      },
    ],
  },
  {
    title:
      'Ontology-assisted Provenance Visualization for Supporting Enterprise Search of Engineering and Business Files',
    authors: 'S Khan, U Kanturska, T Waters, J Eaton, R Bañares-Alcántara, M Chen',
    venue: {
      name: 'Advanced Engineering Informatics',
      type: 'journal',
    },
    year: 2016,
    tags: ['Visualization', 'Software Engineering'],
    links: [
      {
        type: 'pdf',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S1474034616300520',
      },
      {
        type: 'github',
        url: 'https://github.com/saifulkhan/dphil_project_search_interface',
      },
      {
        type: 'github',
        url: 'https://github.com/saifulkhan/dphil_project_search_index',
      },
    ],
  },
  {
    title: 'Visualization Assisted Enterprise Search Engine',
    authors: 'S Khan',
    venue: { name: 'University of Oxford', type: 'book' },
    year: 2015,
    tags: ['DPhil Thesis', 'Visualization', 'Software Engineering'],
    links: [
      {
        type: 'pdf',
        url: 'https://ora.ox.ac.uk/objects/uuid:d1790b99-c30e-487b-b87e-98d4e3a8b2bb',
      },
    ],
  },
  {
    title: 'A Study on Glyph-based Visualisation with Dense Visual Context',
    authors: 'S Khan, KJ Proctor, SJ Walton, R Bañares-Alcántara, M Chen',
    venue: {
      name: 'Computer Graphics & Visual Computing',
      type: 'conference',
    },
    year: 2014,
    tags: ['Visualization'],
    links: [
      {
        type: 'pdf',
        url: 'https://diglib.eg.org/server/api/core/bitstreams/17a466b0-3358-44e2-a93d-c394445dfbb7/content',
      },
      {
        type: 'github',
        url: 'https://github.com/saifulkhan/dphil_project_search_interface',
      },
    ],
  },
];
