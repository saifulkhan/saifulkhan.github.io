export interface Venue {
  name: string;
  type: 'book' | 'conference' | 'journal' | 'workshop' | 'arxiv' | 'report';
}

export type PublicationLinkType = 'doi' | 'pdf' | 'arxiv' | 'github' | 'npm' | 'web';

export interface Publication {
  title: string;
  authors: string;
  venue?: Venue;
  // volume(issue):pages, article number, or page range, shown after the venue name
  details?: string;
  year: number;
  tags: string[];
  // extra remark shown in parentheses at the end of the citation
  note?: string;
  links?: {
    type: PublicationLinkType;
    url: string;
  }[];
}

export const publicationsList: Publication[] = [
  // Preprints
  {
    title: 'Automated Keyword Generation Using LLMs in a High-Volume Data Virtualization Service',
    authors: 'S Khan, Y Xing, J Chakraborty, A Farea, P Beaucamp, S Jackson, M Chen',
    venue: { name: 'arXiv:2610.41893', type: 'arxiv' },
    year: 2026,
    tags: ['Large Language Model', 'Machine Learning', 'Software Engineering'],
    links: [{ type: 'arxiv', url: 'https://arxiv.org/abs/2610.41893' }],
  },
  {
    title:
      'Grounding LLM Agents in Business Processes: Process-Aware Knowledge Graphs for Reliable Multi-Step Service Invocation',
    authors: 'S Khan, A Farea',
    venue: { name: 'arXiv:2610.37242', type: 'arxiv' },
    year: 2026,
    tags: ['Large Language Model', 'Machine Learning', 'Software Engineering'],
    links: [{ type: 'arxiv', url: 'https://arxiv.org/abs/2610.37242' }],
  },
  {
    title: 'eIRWR: Enhanced Iterative Random Walk with Restart for Scalable Root Cause Analysis in Microservices',
    authors: 'S Khan, A Farea',
    venue: { name: 'arXiv:2608.08073', type: 'arxiv' },
    year: 2026,
    tags: ['Machine Learning', 'Software Engineering'],
    links: [{ type: 'arxiv', url: 'https://arxiv.org/abs/2608.08073' }],
  },
  {
    title: 'Understanding How Humans Inject Knowledge into Machine Learning Workflows through Visual Analytics',
    authors: 'Y Xing, P Beaucamp, J Chakraborty, A Farea, Y Jin, S Khan, G Andrienko, N Andrienko, M Chen',
    venue: { name: 'arXiv:2607.00969', type: 'arxiv' },
    year: 2026,
    tags: ['Visualization', 'Machine Learning'],
    links: [{ type: 'arxiv', url: 'https://arxiv.org/abs/2607.00969' }],
  },
  {
    title: 'Optimizing Visual Analytics Workflows: From Theory to Practice',
    authors: 'P Beaucamp, A Abdul-Rahman, R Borgo, W Jentner, S Khan, Y Xing, D Ebert, M Chen',
    venue: { name: 'arXiv:2606.24454', type: 'arxiv' },
    year: 2026,
    tags: ['Visualization'],
    links: [{ type: 'arxiv', url: 'https://arxiv.org/abs/2606.24454' }],
  },
  {
    title: 'A Multiplexing Design Space: Theory, Method, and Application',
    authors: 'Y Xing, A Farea, S Khan, M Chen',
    venue: { name: 'arXiv:2606.12719', type: 'arxiv' },
    year: 2026,
    tags: ['Visualization', 'Machine Learning', 'Software Engineering'],
    links: [{ type: 'arxiv', url: 'https://arxiv.org/abs/2606.12719' }],
  },
  {
    title: 'Learning Fluid-Structure Interaction with Physics-Informed Machine Learning and Immersed Boundary Methods',
    authors: 'A Farea, S Khan, R Daryani, EC Ersan, MS Celebi',
    venue: { name: 'arXiv:2505.18565', type: 'arxiv' },
    year: 2025,
    tags: ['Machine Learning'],
    links: [{ type: 'arxiv', url: 'https://arxiv.org/abs/2505.18565' }],
  },

  // 2026
  {
    title: 'Meta-Storyboard Using Feature-Action Patterns: Concept, Techniques, and Case Studies',
    authors: 'S Khan, S Jones, B Bach, J Cha, M Chen, J Meikle, JC Roberts, J Thiyagalingam, J Wood, PD Ritsos',
    venue: { name: 'Computer Graphics Forum', type: 'journal' },
    year: 2026,
    tags: ['Visualization', 'Software Engineering'],
    links: [
      { type: 'doi', url: 'https://doi.org/10.1111/cgf.70652' },
      { type: 'arxiv', url: 'https://arxiv.org/abs/2402.03116' },
      { type: 'npm', url: 'https://www.npmjs.com/package/meta-storyboard' },
      { type: 'web', url: 'https://saifulkhan.github.io/meta-storyboard-examples' },
    ],
  },
  {
    title: 'Visualization Support for Training PINNs as PDE Solvers',
    authors: 'A Farea, Y Xing, S Khan, M Chen',
    venue: { name: 'Proc. 1st Engineering CCP Conference, Oxford', type: 'conference' },
    year: 2026,
    tags: ['Visualization', 'Machine Learning'],
    links: [{ type: 'pdf', url: '/VIS_PINN_PDE_CCP_2026.pdf' }],
  },

  // 2025
  {
    title: 'Data Virtualization for Machine Learning',
    authors: 'S Khan, J Chakraborty, P Beaucamp, N Bhujel, M Chen',
    venue: { name: 'Proc. 22nd Int. Conf. on Services Computing (SCC 2025), Hong Kong', type: 'conference' },
    details: 'pp. 69–84',
    year: 2025,
    tags: ['Machine Learning', 'Software Engineering'],
    links: [
      { type: 'doi', url: 'https://doi.org/10.1007/978-3-032-06320-5_6' },
      { type: 'arxiv', url: 'https://arxiv.org/abs/2507.17293' },
    ],
  },
  {
    title: 'QCPINN: Quantum-Classical Physics-Informed Neural Networks for Solving PDEs',
    authors: 'A Farea, S Khan, MS Celebi',
    venue: { name: 'Machine Learning: Science and Technology', type: 'journal' },
    details: '6(4):045053',
    year: 2025,
    tags: ['Machine Learning'],
    links: [
      { type: 'doi', url: 'https://doi.org/10.1088/2632-2153/ae1c91' },
      { type: 'github', url: 'https://github.com/afrah/QCPINN' },
    ],
  },
  {
    title: 'Multi-Objective Loss Balancing in Physics-Informed Neural Networks for Fluid Flow Applications',
    authors: 'A Farea, S Khan, MS Celebi',
    venue: {
      name: 'Proc. 32nd IEEE Int. Conf. on High Performance Computing, Data, and Analytics (HiPC 2025), Hyderabad',
      type: 'conference',
    },
    details: 'pp. 108–118',
    year: 2025,
    tags: ['Machine Learning'],
    links: [
      { type: 'doi', url: 'https://doi.org/10.1109/HiPC66333.2025.00020' },
      { type: 'arxiv', url: 'https://arxiv.org/abs/2509.14437' },
    ],
  },
  {
    title: 'An Open Data Service for Supporting Research in Machine Learning on Tokamak Data',
    authors: 'S Jackson, S Khan, N Cummings, J Hodson, S de Witt, S Pamela, R Akers, J Thiyagalingam, MAST Team',
    venue: { name: 'IEEE Transactions on Plasma Science', type: 'journal' },
    details: '53(9):2440–2449',
    year: 2025,
    tags: ['Machine Learning', 'Software Engineering'],
    links: [
      { type: 'doi', url: 'https://doi.org/10.1109/TPS.2025.3583419' },
      { type: 'github', url: 'https://github.com/ukaea/fair-mast' },
    ],
  },

  // 2024
  {
    title: 'FAIR-MAST: A Fusion Device Data Management System',
    authors: 'S Jackson, S Khan, N Cummings, J Hodson, S de Witt, S Pamela, R Akers, J Thiyagalingam, MAST Team',
    venue: { name: 'SoftwareX', type: 'journal' },
    details: '27:101869',
    year: 2024,
    tags: ['Software Engineering'],
    links: [
      { type: 'doi', url: 'https://doi.org/10.1016/j.softx.2024.101869' },
      { type: 'github', url: 'https://github.com/ukaea/fair-mast' },
    ],
  },
  {
    title: 'Streaming Technologies and Serialization Protocols: Empirical Performance Analysis',
    authors: 'S Jackson, N Cummings, S Khan',
    venue: { name: 'IEEE Access', type: 'journal' },
    details: '12:158025–158039',
    year: 2024,
    tags: ['Software Engineering'],
    links: [{ type: 'doi', url: 'https://doi.org/10.1109/ACCESS.2024.3486054' }],
  },

  // 2023
  {
    title: 'Web Performance Evaluation of High Volume Streaming Data Visualization',
    authors: 'S Khan, E Rydow, S Etemaditajbakhsh, K Adamek, W Armour',
    venue: { name: 'IEEE Access', type: 'journal' },
    details: '11:15623–15636',
    year: 2023,
    tags: ['Software Engineering', 'Visualization'],
    links: [
      { type: 'doi', url: 'https://doi.org/10.1109/ACCESS.2023.3245043' },
      { type: 'github', url: 'https://github.com/saifulkhan/streaming-vis-perf' },
    ],
  },
  {
    title: 'Dashboard Design Patterns',
    authors: 'B Bach, E Freeman, A Abdul-Rahman, C Turkay, S Khan, Y Fan, M Chen',
    venue: { name: 'IEEE Transactions on Visualization and Computer Graphics', type: 'journal' },
    details: '29(1):342–352',
    year: 2023,
    tags: ['Visualization'],
    note: 'Presented at IEEE VIS 2022, Honorable Mention',
    links: [
      { type: 'doi', url: 'https://doi.org/10.1109/TVCG.2022.3209448' },
      { type: 'web', url: 'https://dashboarddesignpatterns.github.io/' },
    ],
  },
  {
    title: 'Creating Storytelling Visualizations for the COVID-19 Pandemic Using Feature-Action Design Patterns',
    authors: 'PD Ritsos, S Khan, S Jones, B Bach, J Meikle, JC Roberts, J Wood, M Chen',
    venue: {
      name: 'IEEE VIS Workshop on Visualization for Pandemic and Emergency Responses (Vis4PandEmRes), Melbourne',
      type: 'workshop',
    },
    year: 2023,
    tags: ['Visualization'],
    links: [
      {
        type: 'web',
        url: 'https://research.bangor.ac.uk/en/publications/creating-storytelling-visualizations-for-the-covid-19-pandemic-us/',
      },
    ],
  },
  // 2022
    {
    title: 'Rapid Development of a Data Visualization Service in an Emergency Response',
    authors: 'S Khan, PH Nguyen, A Abdul-Rahman, E Freeman, C Turkay, M Chen',
    venue: { name: 'IEEE Transactions on Services Computing', type: 'journal' },
    details: '15(3):1251–1264',
    year: 2022,
    tags: ['Visualization', 'Software Engineering'],
    links: [{ type: 'doi', url: 'https://doi.org/10.1109/TSC.2022.3164146' }],
  },
  {
    title: 'A System for Organizing, Collecting, and Presenting Open-Source Intelligence',
    authors: 'S Khan, D Wallom',
    venue: { name: 'Journal of Data, Information and Management', type: 'journal' },
    details: '4(2):107–117',
    year: 2022,
    tags: ['Software Engineering'],
    links: [{ type: 'doi', url: 'https://doi.org/10.1007/s42488-022-00068-4' }],
  },
  {
    title: 'Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections and Recommendations',
    authors:
      'J Dykes, A Abdul-Rahman, D Archambault, B Bach, R Borgo, M Chen, J Enright, H Fang, EE Firat, E Freeman, T Gönen, C Harris, R Jianu, NW John, S Khan, A Lahiff, RS Laramee, L Matthews, S Mohr, PH Nguyen, AAM Rahat, R Reeve, PD Ritsos, JC Roberts, A Slingsby, B Swallow, T Torsney-Weir, C Turkay, R Turner, FP Vidal, Q Wang, J Wood, K Xu',
    venue: { name: 'Philosophical Transactions of the Royal Society A', type: 'journal' },
    details: '380(2233):20210299',
    year: 2022,
    tags: ['Visualization'],
    links: [{ type: 'doi', url: 'https://doi.org/10.1098/rsta.2021.0299' }],
  },
  {
    title:
      'RAMPVIS: Answering the Challenges of Building Visualisation Capabilities for Large-scale Emergency Responses',
    authors:
      'M Chen, A Abdul-Rahman, D Archambault, J Dykes, PD Ritsos, A Slingsby, T Torsney-Weir, C Turkay, B Bach, R Borgo, A Brett, H Fang, R Jianu, S Khan, RS Laramee, L Matthews, PH Nguyen, R Reeve, JC Roberts, FP Vidal, Q Wang, J Wood, K Xu',
    venue: { name: 'Epidemics', type: 'journal' },
    details: '39:100569',
    year: 2022,
    tags: ['Software Engineering', 'Visualization'],
    note: 'Early version: arXiv:2012.04757, 2020',
    links: [
      { type: 'doi', url: 'https://doi.org/10.1016/j.epidem.2022.100569' },
      { type: 'arxiv', url: 'https://arxiv.org/abs/2012.04757' },
    ],
  },


  // 2021
  {
    title: 'Propagating Visual Designs to Numerous Plots and Dashboards',
    authors: 'S Khan, PH Nguyen, A Abdul-Rahman, B Bach, M Chen, E Freeman, C Turkay',
    venue: { name: 'IEEE Transactions on Visualization and Computer Graphics', type: 'journal' },
    details: '28(1):86–95',
    year: 2021,
    tags: ['Visualization', 'Software Engineering'],
    note: 'Presented at IEEE VIS 2021',
    links: [
      { type: 'doi', url: 'https://doi.org/10.1109/TVCG.2021.3114828' },
      { type: 'github', url: 'https://github.com/saifulkhan/rampvis-ontology-management-ui' },
    ],
  },

  // 2019
  {
    title: 'Resource Discovery @ the University of Oxford',
    authors: 'C Madsen, M Hurst, S McLeish, I Emsley, R Stacey, M Garibyan, A Abdul-Rahman, S Khan, M Chen',
    venue: { name: 'Technical Report, University of Oxford', type: 'report' },
    year: 2019,
    tags: ['Software Engineering'],
    links: [{ type: 'web', url: 'https://ora.ox.ac.uk/objects/uuid:d7736784-9229-4d14-89ec-7b9d698bfa34' }],
  },

  // 2016
  {
    title:
      'Ontology-assisted Provenance Visualization for Supporting Enterprise Search of Engineering and Business Files',
    authors: 'S Khan, U Kanturska, T Waters, J Eaton, R Bañares-Alcántara, M Chen',
    venue: { name: 'Advanced Engineering Informatics', type: 'journal' },
    details: '30(2):244–257',
    year: 2016,
    tags: ['Visualization', 'Software Engineering'],
    links: [
      { type: 'doi', url: 'https://doi.org/10.1016/j.aei.2016.04.003' },
      { type: 'github', url: 'https://github.com/saifulkhan/dphil_project_search_interface' },
      { type: 'github', url: 'https://github.com/saifulkhan/dphil_project_search_index' },
    ],
  },

  // 2015
  {
    title: 'Visualization Assisted Enterprise Search Engine',
    authors: 'S Khan',
    venue: { name: 'DPhil Thesis, University of Oxford', type: 'book' },
    year: 2015,
    tags: ['DPhil Thesis', 'Visualization', 'Software Engineering'],
    links: [{ type: 'web', url: 'https://ora.ox.ac.uk/objects/uuid:d1790b99-c30e-487b-b87e-98d4e3a8b2bb' }],
  },

  // 2014
  {
    title: 'A Study on Glyph-based Visualisation with Dense Visual Context',
    authors: 'S Khan, KJ Proctor, SJ Walton, R Bañares-Alcántara, M Chen',
    venue: { name: 'Proc. Computer Graphics & Visual Computing (CGVC 2014)', type: 'conference' },
    details: 'pp. 73–80',
    year: 2014,
    tags: ['Visualization'],
    links: [
      {
        type: 'pdf',
        url: 'https://diglib.eg.org/server/api/core/bitstreams/17a466b0-3358-44e2-a93d-c394445dfbb7/content',
      },
      { type: 'github', url: 'https://github.com/saifulkhan/dphil_project_search_interface' },
    ],
  },
];
